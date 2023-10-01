<script lang="ts">
    import PostForm from "$lib/components/post/PostForm.svelte";

    let title = "";
    let site = "";
    let topic = "";
    let series = "";
    let content = "";
    let summary = "";
</script>

<PostForm
    formTitle="게시글 작성"
    bind:title={title}
    bind:site={site}
    bind:topic={topic}
    bind:series={series}
    bind:content={content}
    bind:summary={summary}
/>