<script lang="ts">
    import Topic from "$lib/components/topic/Topic.svelte";
    import type TopicDetailDto from "$lib/domain/Topic/TopicDetail.dto";

    /** @type {import('./$types').PageData} */
    export let data: TopicDetailDto;
</script>

<svelte:head>
    <title>{`주제 - ${data.name} | 싱싱한 코딩`}</title>
    <meta property="og:url" content={"https://limc.dev/topic/" + data.id}>
    <meta property="og:title" content={data.name}>
    <meta property="og:description" content={`주제 ${data.name}의 상세 페이지입니다.`}>
</svelte:head>
<Topic data={data}/>