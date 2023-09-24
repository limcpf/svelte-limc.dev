<script lang="ts">
    import Page from "$lib/domain/Page";
    import type TopicDto from "$lib/domain/Topic/Topic.dto";
    import ListHeader from "$lib/components/common/ListHeader.svelte";
    import TopicListBlock from "$lib/components/topic/list/TopicListBlock.svelte";
    import PageBar from "$lib/components/common/PageBar.svelte";

    let topics: Page<TopicDto> | undefined;

    let page = 1;
    $: loadTopic(page);

    async function loadTopic(page: number) {
        topics = undefined;
        const req = await fetch(`http://localhost:8080/public/topic/site/DEV?page=${page}`)
        topics = await req.json() as Page<TopicDto>;
    }
</script>

{#if topics}
    <div class="topic-list">
        <ListHeader title="주제 목록" page={topics} />
        {#each topics.content as topic}
            <TopicListBlock topicDto={topic} />
        {/each}
        <PageBar tPage={topics} bind:page={page}/>
    </div>
{:else}
    ...load
{/if}

<style>
    .topic-list {
        width: 100%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
</style>