<script lang="ts">
    import {marked} from "marked";
    import prism from "prismjs";
    import "prismjs/themes/prism-twilight.css";
    import "prismjs/components/prism-shell-session";
    import "prismjs/components/prism-kotlin";
    import "prismjs/components/prism-java";

    export let content: string;

    const renderer = new marked.Renderer()
    renderer.image = (href, title, text) => {
        return `<img src="${href}" loading="lazy" alt="${text}"/>`
    }
    renderer.code = (code, infostring) => {
            if(infostring === "shell") infostring = "shell-session"
            return `<pre class = "language-${infostring}"><code class = "language-${infostring}">${Prism.highlight(
                code,
                prism.languages[infostring],
                infostring
            )}</code></pre>`;
    }

    marked.setOptions({
        // highlight: (code, lang) => {
        //     if (prism.languages[lang]) {
        //         return prism.highlight(code, prism.languages[lang], lang);
        //     } else {
        //         return code;
        //     }
        // },
        renderer: renderer
    });

</script>

<article class="markdown-body">
    {@html marked.parse(content)}
</article>

<style>
    code {
        white-space: pre-wrap;
    }
</style>