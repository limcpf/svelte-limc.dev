<script lang="ts">
    import SeriesForm from "$lib/components/series/SeriesForm.svelte";

    let title = "";
    let site = "";
    let topic = "";
    let series = "";
    let content = "";
    let summary = "";
</script>

<SeriesForm
    formTitle="시리즈 작성"
    bind:title={title}
    bind:site={site}
    bind:topic={topic}
/>