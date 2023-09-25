<script lang="ts">
    import Page from "$lib/domain/Page";
    import PostDto from "$lib/domain/Post/Post.dto";
    import PostPageBar from "$lib/components/common/PageBar.svelte";
    import PostListBlock from "$lib/components/post/list/PostListBlock.svelte";
    import PostListHeader from "$lib/components/common/ListHeader.svelte";

    export let loadFunction: (page: number) => Page<PostDto>;
    let posts: Page<PostDto> | undefined;

    let page = 1;
    $: load(page);

    async function load(page:number) {
       posts = await loadFunction(page);
    }
</script>

{#if posts}
    <div class="list-wrapper">
        <PostListHeader title="글 목록" page={posts} />
        {#each posts.content as post}
            <PostListBlock postDto={post} />
        {/each}
        <PostPageBar tPage={posts} bind:page={page}/>
    </div>
{/if}