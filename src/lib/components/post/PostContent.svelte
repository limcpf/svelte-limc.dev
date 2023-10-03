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