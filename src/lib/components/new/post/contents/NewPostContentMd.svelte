<script lang="ts">
    import hljs from "highlight.js";
    import {generateContent} from "$lib/util/markdown.util";
    import {onMount} from "svelte";

    import "highlight.js/styles/a11y-dark.min.css";

    export let content: string;

    const genContent = generateContent(content);

    onMount(() => {
        hljs.highlightAll();
        hljs.configure({ignoreUnescapedHTML: true})

        const codes = document.getElementsByClassName('hljs');

        for(const code of codes) {
            code.innerHTML = code.innerHTML
                .split("\n")
                .map((line) => { if(line) return "<div class='line'>" + line + "</div>\n"})
                .join("");
        }

    })
</script>

{@html genContent}

<style>
    code {
        white-space: pre-wrap;
    }

</style>
