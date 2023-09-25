<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import {getVisibleDateTime} from "$lib/util/time.util";
    import {marked} from "marked";
    import ListFooter from "$lib/components/common/ListBlockFooter.svelte";

    export let postDto: PostDto;

    const { id, title, summary, topic, topicName, series, seriesName, createdAt, updatedAt } = postDto

    const footer: ListFooterProp[] = [
        {text: "주제 : " + topicName, href: `/topic/${topic}`}
    ];

    if(series && seriesName) footer.push({text: "시리즈 : " + seriesName, href: `/series/${series}`});
    if(createdAt && updatedAt) footer.push({text:getVisibleDateTime(createdAt, updatedAt)});

    const renderer = new marked.Renderer()
    renderer.paragraph = (text: string) => `<p style="margin: .3em 0;">${text}</p>`;

    marked.setOptions({
        renderer: renderer
    });

    const markedSummary = marked.parse(summary);
    const href = `/post/${id}`;
</script>
<div class="post-list-block">
    <a href={href} class="post-list-left">
        <div>{ id }</div>
        <div></div>
    </a>
    <div class="post-list-right">
        <div class="post-list-title">
            <h3><a href={href}>{title}</a></h3>
        </div>
        <a href={href} class="post-list-summary">
            {@html markedSummary}
        </a>
        <ListFooter footer={footer} />
    </div>
</div>

<style>
    .post-list-block {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin-bottom: 1.5em;
    }
    .post-list-right {
        grid-column: 1/13;
    }
    .post-list-right > div{
       margin-bottom: 0.3em;
    }
    .post-list-title > h3{
        font-size: 1.1rem;
        margin: 0;
        text-decoration: underline;
    }
    .post-list-title {
        display: flex;

    }
    .post-list-summary {
        display: block;
        color: rgb(128, 128, 128);
        font-size: 0.8rem;
        font-weight: lighter;
    }

    .post-list-left {
        display: none;
    }
    .post-list-left > div:first-child {
        display: flex;
        justify-content: center;
        align-items: start;
        color: darkgray;
        font-size: 0.8rem;
        font-weight: lighter;
        grid-column: 9 / span 1;
    }
    .post-list-left > div:nth-child(2) {
        grid-column: 10 / span 1;
        border-right: 1px solid lightgray;
    }
    @media (min-width: 640px) {
        .post-list-block {
            padding: 0.5em 1em;
        }
        .post-list-right {
            grid-column: 2/13;
        }
        .post-list-title > h3{
            font-size: 1.3rem;
        }
        .post-list-summary {
            font-size: 0.9rem;
        }

        .post-list-left {
            grid-column: 1/2;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            padding: 0.5rem 0;
        }
    }
</style>