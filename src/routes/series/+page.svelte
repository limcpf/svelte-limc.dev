<script lang="ts">
    import SeriesList from "$lib/components/series/list/SeriesList.svelte";
    import Page from "$lib/domain/Page.js";
    import SeriesListDto from "$lib/domain/Series/SeriesList.dto.js";

    async function loadSeries(page: number) {
        const req = await fetch(`http://localhost:8080/public/series/site/DEV?page=${page}`)
        const json = await req.json() as Page<SeriesListDto>
        return json
    }
</script>

<SeriesList loadFunction={loadSeries}/>