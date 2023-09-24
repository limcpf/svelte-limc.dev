<script lang="ts">
    import Page from "$lib/domain/Page";
    import ListHeader from "$lib/components/common/ListHeader.svelte";
    import PageBar from "$lib/components/common/PageBar.svelte";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";
    import SeriesListBlock from "$lib/components/series/list/SeriesListBlock.svelte";

    let seriesList: Page<SeriesListDto> | undefined;

    let page = 1;
    $: loadSeries(page);

    async function loadSeries(page: number) {
        seriesList = undefined;
        const req = await fetch(`http://localhost:8080/public/series/site/DEV?page=${page}`)
        const json = await req.json() as Page<SeriesListDto>

        seriesList = json;
    }
</script>

{#if seriesList}
    <div class="series-list">
        <ListHeader title="시리즈 목록" page={seriesList} />
        {#each seriesList.content as series}
            <SeriesListBlock seriesDto={series} />
        {/each}
        <PageBar tPage={seriesList} bind:page={page}/>
    </div>
{:else}
    ...load
{/if}

<style>
    .series-list {
        width: 100%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
</style>