import {marked} from "marked";
import prism from "prismjs";

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
    const renderer = new marked.Renderer()


    renderer.image = (href, title, text) => {
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

    renderer.code = (code, infostring) => {
        let info = infostring ? infostring : "";
        if(info === "shell") info = "shell-session"
        return `<pre class = "language-${infostring}"><code class = "language-${infostring}">${prism.highlight(
            code,
            prism.languages[info],
            info
        )}</code></pre>`;
    }

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
        generatedContent = marked(content);
    } catch (e) {
        console.log(e);
        generatedContent = "<h2>문서를 불러오는데 실패했습니다.</h2>";
    }

    return generatedContent;
}