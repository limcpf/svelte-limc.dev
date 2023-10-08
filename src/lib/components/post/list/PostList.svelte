<script lang="ts">
    import Page from "$lib/domain/Page";
    import PostDto from "$lib/domain/Post/Post.dto";
    import PostPageBar from "$lib/components/common/PageBar.svelte";
    import PostListBlock from "$lib/components/post/list/PostListBlock.svelte";
    import PostListHeader from "$lib/components/common/ListHeader.svelte";
    import NoContents from "$lib/components/common/NoContents.svelte";
    import type PostListDto from "$lib/domain/Post/PostList.dto";

        export let loadFunction: (page: number) => Promise<Page<PostListDto>>;
    let posts: Page<PostListDto> | undefined;
    $: posts = posts

    let page = 1;
    $: load(page);

    async function load(page:number) {
        posts = undefined
        posts = await loadFunction(page);
    }
</script>

{#if posts}
    {#if posts.content.length > 0}
        <div class="list-wrapper">
            <PostListHeader title="글 목록" page={posts} />
            {#each posts.content as post}
                <PostListBlock postListDto={post} />
            {/each}
            <PostPageBar tPage={posts} bind:page={page}/>
        </div>
    {:else}
        <NoContents />
    {/if}
{/if}