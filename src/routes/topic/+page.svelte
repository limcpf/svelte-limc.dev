<script>
    import TopicList from "$lib/components/topic/list/TopicList.svelte";

    const pageTitle = "주제 목록 | 싱싱한 코딩";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta property="og:url" content="https://limc.dev/topic">
    <meta property="og:title" content={pageTitle}>
    <meta property="og:description" content="주제 목록 페이지입니다.">
</svelte:head>

<TopicList />