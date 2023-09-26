<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import type PostDto from "$lib/domain/Post/Post.dto";

    /** @type {import('./$types').PageData} */
    export let data: PostDto;
</script>

<svelte:head>
    <title>{`${data.title} | 싱싱한 코딩`}</title>
    <meta property="og:url" content={"https://limc.dev/post/" + data.id}>
    <meta property="og:title" content={data.title}>
    <meta property="og:description" content={data.summary.slice(0, 150)}>
</svelte:head>
<Post data={data}/>