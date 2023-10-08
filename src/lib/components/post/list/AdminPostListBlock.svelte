<script lang="ts">
    import {getVisibleDateTime} from "$lib/util/time.util";
    import ListFooter from "$lib/components/common/ListBlockFooter.svelte";
    import AdminPostActionBlock from "$lib/components/post/list/AdminPostActionBlock.svelte";
    import type PostReadDto from "$lib/domain/Post/PostRead.dto";

    export let postReadDto: PostReadDto;
    let open = false;
    const toggle = () => open = !open;
    const { id, postTitle, postContents, siteDto, seriesDto, topicDto, createdAt, updatedAt } = postReadDto

    let isPublished = postReadDto.isPublished

    const footer: ListFooterProp[] = [
        {text: "발행상태 : " + (isPublished ? "발행" : "미발행")},
        {text: "주제 : " + topicDto.name, href: `/admin/topic/${topicDto.id}`}
    ];

    if(seriesDto) footer.push({text: "시리즈 : " + seriesDto.title, href: `/admin/series/${seriesDto.id}`});
    if(createdAt) footer.push({text: "created at " + getVisibleDateTime(createdAt, updatedAt)});
    if(updatedAt) footer.push({text: "updated at " + getVisibleDateTime(updatedAt, updatedAt)});
</script>
<div
        aria-current={open}
        class="post-list-block list-block"
>
    <div class="post-list-right" on:click={toggle}>
        <div class="post-list-title">
            <h3>{postTitle.title}</h3>
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