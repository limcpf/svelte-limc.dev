<script lang="ts">
    import { onMount} from "svelte";
    import type TopicDto from "$lib/domain/Topic/Topic.dto";
    import TopicForm from "$lib/components/topic/TopicForm.svelte";

    /** @type {import('./$types').PageData} */
    export let data: {id: number};

    let topic: TopicDto;

    onMount(async () => {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/topic/${data.id}`, {
            credentials: "include"
        })

        topic = await req.json() as TopicDto;
    })

</script>

{#if topic}
    <TopicForm
            formTitle="주제 수정"
            bind:name={topic.title}
            bind:site={topic.site}
            bind:id={topic.id}
            isUpdate={true}
    />
{/if}