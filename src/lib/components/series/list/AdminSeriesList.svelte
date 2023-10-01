<script lang="ts">
    import Page from "$lib/domain/Page";
    import ListHeader from "$lib/components/common/ListHeader.svelte";
    import PageBar from "$lib/components/common/PageBar.svelte";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";
    import NoContents from "$lib/components/common/NoContents.svelte";
    import AdminSeriesListBlock from "$lib/components/series/list/AdminSeriesListBlock.svelte";
    import MenuBtn from "$lib/components/menu/MenuBtn.svelte";

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

            <ListHeader title="시리즈 목록" isAdmin>
                <MenuBtn menu={{text: "생 성", href: "/admin/series/add", startWith: false}}/>
            </ListHeader>

            {#each seriesList.content as series}
                <AdminSeriesListBlock seriesDto={series} />
            {/each}
            <PageBar tPage={seriesList} bind:page={page}/>
        </div>
    {:else}
        <NoContents />
    {/if}
{/if}
