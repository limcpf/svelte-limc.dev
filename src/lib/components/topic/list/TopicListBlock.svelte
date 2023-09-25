<script lang="ts">
    import {getVisibleDateTime} from "$lib/util/time.util";
    import type TopicDto from "$lib/domain/Topic/Topic.dto";
    import ListBlockFooter from "$lib/components/common/ListBlockFooter.svelte";

    export let topicDto: TopicDto;

    const { id, name, site, createdAt, updatedAt } = topicDto

    const footer: ListFooterProp[] = [];

    if(createdAt && updatedAt) footer.push({text: "created at " + getVisibleDateTime(createdAt, updatedAt)});

    const href = `/topic/${id}`;
</script>
<div class="topic-list-block">
    <div class="topic-list-title">
        <div class="topic-before-wrapper"><span class="topic-before">-</span></div>
        <h3><a href={href}>{name}</a></h3>
    </div>
    <ListBlockFooter footer={footer} />
</div>

<style>
    .topic-before-wrapper {
        display: flex;
        align-items: center;
    }
    .topic-before {
        margin-right: .5rem;
        font-weight: bold;
        font-size: 1.5em;
    }
    .topic-list-block {
        width: 95%;
        display: flex;
        flex-direction: column;
        margin-bottom: .5em;
        align-items: normal;
    }
    .topic-list-title > h3{
        font-size: 1.1rem;
        margin: 0 0.5rem 0 0;
        text-decoration: underline;
    }
    .topic-list-title {
        display: flex;
        align-items: center;
    }

    @media (min-width: 640px) {
        .topic-list-block {
            width: 100%;
            padding: 0.5em 0 .5em 2em;
            box-sizing: border-box;
        }
        .topic-list-title > h3{
            font-size: 1.3rem;
        }
    }
</style>