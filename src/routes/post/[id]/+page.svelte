<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import type PostListDto from "$lib/domain/Post/PostList.dto";

    /** @type {import('./$types').PageData} */
    export let data: PostListDto;
</script>

<svelte:head>
    <title>{`${data.postTitle.title} | 싱싱한 코딩`}</title>
    <meta property="og:url" content={"https://limc.dev/post/" + data.postTitle.title.replaceAll(" ", "-")}>
    <meta property="og:title" content={data.postTitle.title}>
    <meta property="og:description" content={data.postTitle.summary.slice(0, 150)}>
</svelte:head>
<Post data={data}/>