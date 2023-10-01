<script lang="ts">
    import Page from "$lib/domain/Page";
    import PostDto from "$lib/domain/Post/Post.dto";
    import PostPageBar from "$lib/components/common/PageBar.svelte";
    import PostListHeader from "$lib/components/common/ListHeader.svelte";
    import NoContents from "$lib/components/common/NoContents.svelte";
    import AdminPostListBlock from "$lib/components/post/list/AdminPostListBlock.svelte";
    import MenuBtn from "$lib/components/menu/MenuBtn.svelte";

    export let loadFunction: (page: number) => Promise<Page<PostDto>>;
    let posts: Page<PostDto> | undefined;
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
            <PostListHeader title="글 목록" page={undefined} isAdmin={true}>
                <MenuBtn menu={{text: "작 성", href: "/admin/post/add", startWith: false}}/>
            </PostListHeader>
            {#each posts.content as post}
                <AdminPostListBlock postDto={post} />
            {/each}
            <PostPageBar tPage={posts} bind:page={page}/>
        </div>
    {:else}
        <NoContents />
    {/if}
{/if}

<style>
</style>