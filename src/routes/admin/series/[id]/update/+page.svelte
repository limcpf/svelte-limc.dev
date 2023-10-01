<script lang="ts">
    import { onMount} from "svelte";
    import SeriesForm from "$lib/components/series/SeriesForm.svelte";
    import type SeriesDetailDto from "$lib/domain/Series/SeriesDetail.dto";

    /** @type {import('./$types').PageData} */
    export let data: {id: number};

    let series: SeriesDetailDto;

    onMount(async () => {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/series/${data.id}`, {
            credentials: "include"
        })

        series = await req.json() as SeriesDetailDto;
    })

</script>

{#if series}
    <SeriesForm
            formTitle="시리즈 수정"
            bind:title={series.title}
            bind:site={series.site}
            bind:topic={series.topic}
            bind:id={series.id}
            isUpdate={true}
    />
{/if}