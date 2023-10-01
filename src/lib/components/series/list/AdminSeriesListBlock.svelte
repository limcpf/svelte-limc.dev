<script lang="ts">
    import {getVisibleDateTime} from "$lib/util/time.util";
    import ListBlockFooter from "$lib/components/common/ListBlockFooter.svelte";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";
    import AdminActionBlock from "$lib/components/admin/AdminActionBlock.svelte";

    export let seriesDto: SeriesListDto;

    let open = false;
    const toggle = () => open = !open;

    const { id, title, topic, topicName,createdAt, updatedAt } = seriesDto

    const footer: ListFooterProp[] = [
        { text: "주제 : " + topicName, href: `/admin/topic/${topic}`}
    ];

    if(createdAt) footer.push({text: "created at " + getVisibleDateTime(createdAt, updatedAt)});
    if(updatedAt) footer.push({text: "updated at " + getVisibleDateTime(updatedAt, updatedAt)});

    const href = `#`;

    const deleteSeries = async (id: number | string) =>
    {
        try {
            if(!confirm("진짜 시리즈를 삭제하시겠습니까?")) return;

            await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/series/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-type" : "application/json"
                },
            });

            alert(`시리즈 삭제 하였습니다.`);
            location.reload();
        } catch (e: any) {
            alert(`시리즈 삭제 실패하였습니다.`)
        }
    }
</script>
<div
        class="series-list-block list-block"
        aria-current={open}
        on:click={toggle}
>
    <div class="series-list-title">
        <div class="series-before-wrapper"><span class="series-before">-</span></div>
        <h3>{title}</h3>
    </div>
    <ListBlockFooter footer={footer} />
    {#if open}
        <hr />
        <AdminActionBlock id={id} link="series" deleteFunction={deleteSeries} />
    {/if}
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
            width: 100%;
            padding: 0.5em 2em;
            box-sizing: border-box;
        }
        .series-list-title > h3{
            font-size: 1.3rem;
        }
    }
</style>