<script lang="ts">
    import Page from "$lib/domain/Page";
    import ListHeader from "$lib/components/common/ListHeader.svelte";
    import PageBar from "$lib/components/common/PageBar.svelte";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";
    import SeriesListBlock from "$lib/components/series/list/SeriesListBlock.svelte";
    import NoContents from "$lib/components/common/NoContents.svelte";

    export let loadFunction: (page: number) => Promise<Page<SeriesListDto>>;

    let seriesList: Page<SeriesListDto> | undefined;

    let page = 1;
    $: load(page);


    async function load(page:number) {
        seriesList = undefined;
        seriesList = await loadFunction(page);
    }
</script>

{#if seriesList}
    {#if seriesList.content.length > 0}
        <div class="list-wrapper">
            <ListHeader title="시리즈 목록" page={seriesList} />
            {#each seriesList.content as series}
                <SeriesListBlock seriesDto={series} />
            {/each}
            <PageBar tPage={seriesList} bind:page={page}/>
        </div>
    {:else}
        <NoContents />
    {/if}
{/if}
