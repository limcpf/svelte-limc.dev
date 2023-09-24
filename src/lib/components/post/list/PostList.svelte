<script lang="ts">
    import Page from "$lib/domain/Page";
    import PostDto from "$lib/domain/Post/Post.dto";
    import PostPageBar from "$lib/components/common/PageBar.svelte";
    import PostListBlock from "$lib/components/post/list/PostListBlock.svelte";
    import PostListHeader from "$lib/components/common/ListHeader.svelte";

    let posts: Page<PostDto> | undefined;

    let page = 1;
    $: loadPost(page);

    async function loadPost(page: number) {
        posts = undefined;
        const req = await fetch(`http://localhost:8080/public/post/site/DEV?page=${page}`)
        const json = await req.json() as Page<PostDto>

        posts = json;
    }
</script>

{#if posts}
    <div class="topic-list">
        <PostListHeader title="글 목록" page={posts} />
        {#each posts.content as post}
            <PostListBlock postDto={post} />
        {/each}
        <PostPageBar tPage={posts} bind:page={page}/>
    </div>
{:else}
    ...load
{/if}

<style>
    .topic-list {
        width: 100%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
</style>