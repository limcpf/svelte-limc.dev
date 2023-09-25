<script lang="ts">
    import Series from "$lib/components/series/Series.svelte";
    import type SeriesDetailDto from "$lib/domain/Series/SeriesDetail.dto";
    import Post from "$lib/components/post/Post.svelte";

    /** @type {import('./$types').PageData} */
    export let data: SeriesDetailDto;
</script>

<svelte:head>
    <title>{`시리즈 - ${data.title} | 싱싱한코딩`}</title>
    <meta property="og:url" content={"https://limc.dev/series/" + data.id}>
    <meta property="og:title" content={data.title}>
    <meta property="og:description" content={`시리즈 ${data.title}의 상세 페이지입니다.`}>
</svelte:head>
<Series data={data}/>