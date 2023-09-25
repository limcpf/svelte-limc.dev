<script lang="ts">
    import Page from "$lib/domain/Page";
    import ListHeader from "$lib/components/common/ListHeader.svelte";
    import PageBar from "$lib/components/common/PageBar.svelte";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";
    import SeriesListBlock from "$lib/components/series/list/SeriesListBlock.svelte";

    export let loadFunction: (page: number) => Page<SeriesListDto>;
    let seriesList: Page<SeriesListDto> | undefined;

    let page = 1;
    $: load(page);


    async function load(page:number) {
        seriesList = await loadFunction(page);
    }
</script>

{#if seriesList}
    <div class="list-wrapper">
        <ListHeader title="시리즈 목록" page={seriesList} />
        {#each seriesList.content as series}
            <SeriesListBlock seriesDto={series} />
        {/each}
        <PageBar tPage={seriesList} bind:page={page}/>
    </div>
{:else}
    ...load
{/if}
