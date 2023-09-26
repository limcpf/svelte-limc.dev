<script lang="ts">
    import PostList from "$lib/components/post/list/PostList.svelte";
    import Page from "$lib/domain/Page.js";
    import PostDto from "$lib/domain/Post/Post.dto.js";

    const pageTitle = "글 목록 | 싱싱한 코딩"

    async function loadPost(page: number) {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/post/site/DEV?page=${page}`)
        return await req.json() as Page<PostDto>
    }
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta property="og:url" content="https://limc.dev/post">
    <meta property="og:title" content={pageTitle}>
    <meta property="og:description" content="글 목록 페이지입니다.">
</svelte:head>
<PostList loadFunction={loadPost}/>