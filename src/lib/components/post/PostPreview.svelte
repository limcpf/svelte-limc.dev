<script lang="ts">
    import PostContent from "$lib/components/post/PostContent.svelte";
    export let content: string;
</script>


<div class="post-wrapper">
    <PostContent content={content} />
</div>

<style>
    .post-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1400px;
        text-align: justify;
    }
</style>