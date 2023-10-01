<script lang="ts">
    import TopicForm from "$lib/components/topic/TopicForm.svelte";

    let name = "";
    let site = "";
</script>

<TopicForm
    formTitle="주제 작성"
    bind:name={name}
    bind:site={site}
/>