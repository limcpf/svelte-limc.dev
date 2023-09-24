<script>
    import {marked} from "marked";
    import prism from "prismjs";
    import "prismjs/themes/prism-twilight.min.css";
    import "prismjs/components/prism-shell-session";
    import "prismjs/components/prism-kotlin";
    import "prismjs/components/prism-java";

    export let content;

    const renderer = new marked.Renderer()
    renderer.image = (href, title, text) => {
        return `<img src="${href}" loading="lazy" alt="${text}"/>`
    }

    marked.setOptions({
        highlight: (code, lang) => {
            if (prism.languages[lang]) {
                return prism.highlight(code, prism.languages[lang], lang);
            } else {
                return code;
            }
        },
        renderer: renderer
    });

    const html = marked.parse(content)
</script>

<article class="markdown-body">
    {@html html}
</article>

<style>
</style>