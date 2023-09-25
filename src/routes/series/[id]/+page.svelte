<script lang="ts">
    import Series from "$lib/components/series/Series.svelte";
    import type SeriesDetailDto from "$lib/domain/Series/SeriesDetail.dto";

    /** @type {import('./$types').PageData} */
    export let data: SeriesDetailDto;
</script>

<Series data={data}/>