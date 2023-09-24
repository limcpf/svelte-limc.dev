<script lang="ts">
    import {getVisibleDateTime} from "$lib/util/time.util";
    import ListBlockFooter from "$lib/components/common/ListBlockFooter.svelte";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";

    export let seriesDto: SeriesListDto;

    const { id, title, topic, topicName,createdAt, updatedAt } = seriesDto

    const footer: ListFooterProp[] = [
        { text: "주제 : " + topicName, href: `/topic/${topic}`}
    ];

    if(createdAt && updatedAt) footer.push({text: "created at " + getVisibleDateTime(createdAt, updatedAt)});

    const href = `/topic/${id}`;
</script>
<div class="series-list-block">
    <div class="series-list-title">
        <div class="series-before-wrapper"><span class="series-before">-</span></div>
        <h3><a href={href}>{title}</a></h3>
    </div>
    <ListBlockFooter footer={footer} />
</div>

<style>
    .series-before-wrapper {
        display: flex;
        align-items: center;
    }
    .series-before {
        margin-right: .5rem;
        font-weight: bold;
        font-size: 1.5em;
    }
    .series-list-block {
        width: 95%;
        display: flex;
        flex-direction: column;
        margin-bottom: .5em;
        align-items: normal;
    }
    .series-list-title > h3{
        font-size: 1.1rem;
        margin: 0 0.5rem 0 0;
        text-decoration: underline;
    }
    .series-list-title {
        display: flex;
        align-items: center;
    }

    @media (min-width: 640px) {
        .series-list-block {
            width: 75%;
            padding: 0.5em 1em;
        }
        .series-list-title > h3{
            font-size: 1.3rem;
        }
    }
</style>