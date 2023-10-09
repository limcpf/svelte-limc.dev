<script lang="ts">
    import prism from "prismjs";
    import {marked} from "marked";
    import "prismjs/themes/prism-twilight.css";
    import "prismjs/components/prism-kotlin";
    import "prismjs/components/prism-shell-session"
    import "prismjs/components/prism-java";
    import {generatorHeaderId} from "$lib/util/markdown.util";

    export let content: string;

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
        if(infostring === "shell") infostring = "shell-session"
        return `<pre class = "language-${infostring}"><code class = "language-${infostring}">${Prism.highlight(
            code,
            prism.languages[infostring],
            infostring
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
</script>

{@html marked.parse(content)}

<style>
    code {
        white-space: pre-wrap;
    }
</style>
