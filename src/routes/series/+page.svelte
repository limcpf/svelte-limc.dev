<script lang="ts">
    import SeriesList from "$lib/components/series/list/SeriesList.svelte";
    import Page from "$lib/domain/Page.js";
    import SeriesListDto from "$lib/domain/Series/SeriesList.dto.js";

    async function loadSeries(page: number) {
        const req = await fetch(`http://localhost:8080/public/series/site/DEV?page=${page}`)
        return await req.json() as Page<SeriesListDto>
    }
</script>

<SeriesList loadFunction={loadSeries}/>