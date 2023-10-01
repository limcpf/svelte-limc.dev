<script lang="ts">
    import Topic from "$lib/components/topic/Topic.svelte";
    import type TopicDetailDto from "$lib/domain/Topic/TopicDetail.dto";

    /** @type {import('./$types').PageData} */
    export let data: TopicDetailDto;
</script>

<Topic data={data}/>