import {Marked} from "marked";
import {markedHighlight} from "marked-highlight";
import hljs from "highlight.js";

export interface toc {
    main: string,
    sub: string[]
}

export const generatorHeaderId = (header:string) => encodeURI(header.replaceAll(" ", "-"));

export const generatorToc = (content: string) => {
    const headers = content.split("\n").filter((str) => str.startsWith("##"));
    return headers.join("\n");
}

export function generateContent(content: string) {
    const marked = new Marked(
        markedHighlight({
            async: false,
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            }
        })
    )

    const renderer = new marked.Renderer()

    renderer.image = (href, title, text) => {
        if(href.indexOf(".webm") !== -1) return `<video controls loop autoplay muted><source src=${href} type="video/webm"></video>`
        const extensionIdx = href.lastIndexOf(".");
        const pre = href.slice(0, extensionIdx);
        const suf = href.slice(extensionIdx, href.length)
        const lg = `${pre + "-lg" + suf}`;
        const md = `${pre + "-md" + suf}`;
        const sm = `${pre + "-sm" + suf}`;

        return `<img
                    srcset="${sm} 400w, ${md} 800w, ${lg} 1200w"
                    sizes="(max-width: 400px) 400px,
                            (max-width: 800px) 800px,
                            1222px"
                    src=${pre + "-lg" + suf + " 1200w"}
                    alt=${text}
                    loading="lazy"
               />`
    }

    // renderer.code = (code, infostring) => {
    //     console.log()
    //     return `<pre><code class = "language-${infostring} hljs">${code.split("\n").join("\n<div class='line'></div>")}</code></pre>`;
    // }

    renderer.heading = (text: string, level: number) => {
        const header = [
            `<h1><a href="#toc">${text}</a></h1>`,
            `<h2 id=${generatorHeaderId(text)} href="#toc"><a href="#toc">${text}</a></h2>`,
            `<h3 id=${generatorHeaderId(text)} href="#toc"><a href="#toc">${text}</a></h3>`,
        ]
        return header[level - 1] || `<h4 href="#toc"><a href="#toc">${text}</a></h4>`;
    }

    renderer.link = (href: string, title: string | null | undefined, text: string) => {
        if(href.startsWith("#")) return `<a href=${href}>{text}</a>`;
        return `<a href=${href}  class="external-link-icon" target="_blank">${text}</a>`
    }

    marked.setOptions({
        renderer: renderer
    });

    let generatedContent: string;

    try {
        generatedContent = marked.parse(content) as string;
    } catch (e) {
        console.log(e);
        generatedContent = "<h2>문서를 불러오는데 실패했습니다.</h2>";
    }

    return generatedContent;
}
