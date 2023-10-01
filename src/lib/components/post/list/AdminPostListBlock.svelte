<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import {getVisibleDateTime} from "$lib/util/time.util";
    import ListFooter from "$lib/components/common/ListBlockFooter.svelte";
    import AdminPostActionBlock from "$lib/components/post/list/AdminPostActionBlock.svelte";

    export let postDto: PostDto;
    let open = false;
    const toggle = () => open = !open;
    const { id, title, summary, topic, topicName, series, seriesName, createdAt, updatedAt } = postDto

    let isPublished = postDto.isPublished

    const footer: ListFooterProp[] = [
        {text: "발행상태 : " + (isPublished ? "발행" : "미발행")},
        {text: "주제 : " + topicName, href: `/admin/topic/${topic}`}
    ];

    if(series && seriesName) footer.push({text: "시리즈 : " + seriesName, href: `/admin/series/${series}`});
    if(createdAt) footer.push({text: "created at " + getVisibleDateTime(createdAt, updatedAt)});
    if(updatedAt) footer.push({text: "updated at " + getVisibleDateTime(updatedAt, updatedAt)});
</script>
<div
        class="post-list-block list-block"
        aria-current={open}
>
    <div class="post-list-right" on:click={toggle}>
        <div class="post-list-title">
            <h3>{title}</h3>
        </div>
        <ListFooter footer={footer} />
    </div>
    {#if open}
        <hr />
        <AdminPostActionBlock id={id} bind:isPublished={isPublished} />
    {/if}
</div>


<style>
    .post-list-block {
        width: 100%;
        display: flex;
        padding: .5em;
        flex-direction: column;
        margin-bottom: .5em;
        border-radius: .5em;
        transition: .2s ease-in-out;
        box-sizing: border-box;
    }
    .post-list-title > h3{
        font-size: 1.1rem;
        margin: 0;
        text-decoration: underline;
    }
    .post-list-title {
        display: flex;
    }
    .admin-post-wrapper > div {
        grid-column: 1 span;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 640px) {
        .post-list-block {
            padding: 1em 2em;
        }
        .post-list-right {
            grid-column: 2/13;
        }
        .post-list-title > h3{
            font-size: 1.3rem;
        }
    }
</style>