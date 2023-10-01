<script lang="ts">
    import Page from "$lib/domain/Page";
    import type TopicDto from "$lib/domain/Topic/Topic.dto";
    import ListHeader from "$lib/components/common/ListHeader.svelte";
    import PageBar from "$lib/components/common/PageBar.svelte";
    import NoContents from "$lib/components/common/NoContents.svelte";
    import AdminTopicListBlock from "$lib/components/topic/list/AdminTopicListBlock.svelte";
    import MenuBtn from "$lib/components/menu/MenuBtn.svelte";

    let topics: Page<TopicDto> | undefined;

    let page = 1;
    $: loadTopic(page);

    async function loadTopic(page: number) {
        topics = undefined;
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/public/topic/site/DEV?page=${page}`)
        topics = await req.json() as Page<TopicDto>;
    }
</script>

{#if topics}
    {#if topics.content.length > 0}
        <div class="list-wrapper">
            <ListHeader title="주제 목록" isAdmin>
                <MenuBtn menu={{text: "작 성", href: "/admin/topic/add", startWith: false}}/>
            </ListHeader>
            {#each topics.content as topic}
                <AdminTopicListBlock topicDto={topic} />
            {/each}
            <PageBar tPage={topics} bind:page={page}/>
        </div>
    {:else}
        <NoContents />
    {/if}
{/if}

<style>
</style>