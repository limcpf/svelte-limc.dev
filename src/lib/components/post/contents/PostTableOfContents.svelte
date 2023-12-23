<script lang="ts">
    import {marked} from "marked";
    import {generatorHeaderId} from "$lib/util/markdown.util";

    export let tableOfContents: string;

    let show = true;

    const renderer = new marked.Renderer()

    const listStyle = `
       display:block;
       font-weight: bold;
       margin-top: 0.5em;
       padding-bottom:0.5em;
       border-bottom: 1px solid lightgray;
    `;

    const listStyle2 = `
       display:block;
       padding-left: 1em;
       margin: 0.2em 0;
    `;
    renderer.heading = (text: string, level: number) => {
        if(level === 2) return `<li><a style="${listStyle}" href="#${generatorHeaderId(text)}">${text}</a></li>`
        return `<a style="${listStyle2}" href="#${generatorHeaderId(text)}">- ${text}</a>`
    }

    marked.setOptions({
        renderer: renderer
    });
</script>


<div class="toc-wrapper">
    <details id="toc">
        <summary on:click={() => show = !show}>목차</summary>
        <ol class="toc-content">
            {@html marked.parse(tableOfContents)}
        </ol>
    </details>
    {#if !show}<div class="no-show">현재 목차가 감춰져있는 상태입니다.<br/>목차 확인을 원하신다면 목차 버튼을 눌러 펼쳐주세요.</div>{/if}
</div>
<hr />

<style>
    .toc-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
    }
    .toc-content {
        padding-left: 1em;
        margin: 0.5em 0;
    }

    details {
        width: 100%;
    }
    summary {
        display: block;
        width: 100%;
        background-color: rgba(0,0,0,0.03);
        padding: 0.5em 1.5em;

        font-size: 1.1em;
        font-weight: bold;
        cursor: pointer;

        box-sizing: border-box;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }

    .no-show {
        background-color: rgba(0,0,0,0.02);
        width: 100%;
        padding: 2em 0;
        text-align: center;
        font-weight: lighter;
        color:darkgray;
    }
</style>