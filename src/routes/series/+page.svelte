<script lang="ts">
    import SeriesList from "$lib/components/series/list/SeriesList.svelte";
    import Page from "$lib/domain/Page.js";
    import SeriesListDto from "$lib/domain/Series/SeriesList.dto.js";

    const pageTitle = "시리즈 목록 | 싱싱한코딩";

    async function loadSeries(page: number) {
        const req = await fetch(`http://localhost:8080/public/series/site/DEV?page=${page}`)
        return await req.json() as Page<SeriesListDto>
    }
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta property="og:url" content="https://limc.dev/series">
    <meta property="og:title" content={pageTitle}>
    <meta property="og:description" content="시리즈 목록 페이지입니다.">
</svelte:head>
<SeriesList loadFunction={loadSeries}/>