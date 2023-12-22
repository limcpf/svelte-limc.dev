<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import type PostReadDto from "$lib/domain/Post/PostRead.dto";

    /** @type {import('./$types').PageData} */
    export let data: PostReadDto;
</script>

<svelte:head>
    <title>{`${data.postTitle.title} | 싱싱한 코딩`}</title>
    <meta content={"https://limc.dev/post/" + data.postTitle.title.replaceAll(" ", "-")} property="og:url">
    <meta content={data.postTitle.title} property="og:title">
    <meta content={data.postTitle.summary.slice(0, 150)} property="og:description">
    <meta content={data.postTitle.summary.slice(0, 150)} property="description">
</svelte:head>

<Post data={data}/>