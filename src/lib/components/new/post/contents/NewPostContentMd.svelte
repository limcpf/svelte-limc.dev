<script lang="ts">
    export const ssr = false;
    import "prismjs/themes/prism-twilight.css";

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
