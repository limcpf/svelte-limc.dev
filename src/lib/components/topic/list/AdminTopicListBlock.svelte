<script lang="ts">
    import {getVisibleDateTime} from "$lib/util/time.util";
    import type TopicDto from "$lib/domain/Topic/Topic.dto";
    import ListBlockFooter from "$lib/components/common/ListBlockFooter.svelte";
    import AdminActionBlock from "$lib/components/admin/AdminActionBlock.svelte";

    export let topicDto: TopicDto;

    let open = false;
    const toggle = () => open = !open;

    const { id, name, site, createdAt, updatedAt } = topicDto

    const footer: ListFooterProp[] = [];

    if(createdAt) footer.push({text: "created at " + getVisibleDateTime(createdAt, updatedAt)});
    if(updatedAt) footer.push({text: "updated at " + getVisibleDateTime(updatedAt, updatedAt)});

    const href = `#`;
    const deleteTopic = async (id: number | string) =>
    {
        try {
            if(!confirm("진짜 주제를 삭제하시겠습니까?")) return;

            await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/topic/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-type" : "application/json"
                },
            });

            alert(`주제 삭제 하였습니다.`);
            location.reload();
        } catch (e: any) {
            alert(`주제 삭제 실패하였습니다.`)
        }
    }
</script>
<div
        class="topic-list-block list-block"
        aria-current={open}
        on:click={toggle}
>
    <div class="topic-list-title">
        <div class="topic-before-wrapper"><span class="topic-before">-</span></div>
        <h3>{name}</h3>
    </div>
    <ListBlockFooter footer={footer} />
    {#if open}
        <hr />
        <AdminActionBlock id={id} link="topic" deleteFunction={deleteTopic} />
    {/if}
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
            padding: 0.5em 2em;
            box-sizing: border-box;
        }
        .topic-list-title > h3{
            font-size: 1.3rem;
        }
    }
</style>