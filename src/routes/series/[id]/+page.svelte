<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import type PostDto from "$lib/domain/Post/Post.dto";
    import type TopicDto from "$lib/domain/Topic/Topic.dto";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";
    import Series from "$lib/components/series/Series.svelte";
    import type SeriesDetailDto from "$lib/domain/Series/SeriesDetail.dto";

    /** @type {import('./$types').PageData} */
    export let data: SeriesDetailDto;
</script>

<Series data={data}/>