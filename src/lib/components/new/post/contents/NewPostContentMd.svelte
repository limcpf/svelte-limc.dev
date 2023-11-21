<script lang="ts">
    import "prismjs/themes/prism-twilight.css";
    import "prismjs/components/prism-kotlin";
    import "prismjs/components/prism-shell-session"
    import "prismjs/components/prism-java";
    import {generateContent} from "$lib/util/markdown.util";

    export let content: string;

    const genContent = generateContent(content);
</script>

{@html genContent}

<style>
    code {
        white-space: pre-wrap;
    }
</style>
