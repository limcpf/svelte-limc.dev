<script lang="ts">
    import hljs from "highlight.js";
    import {generateContent} from "$lib/util/markdown.util";
    import {onMount} from "svelte";


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

<svelte:head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/default-dark.min.css" rel="stylesheet">
</svelte:head>
{@html genContent}

<style>
    code {
        white-space: pre-wrap;
    }

</style>
