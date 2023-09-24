<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import PostProperties from "$lib/components/post/PostProperties.svelte";
    import PostContent from "$lib/components/post/PostContent.svelte";
    import PostReply from "$lib/components/post/PostReply.svelte";

    export let data: PostDto;

    const {
        id,
        title,
        topic,
        topicName,
        series,
        seriesName,
        content,
        createdAt,
        updatedAt
    } = data
</script>

<div class="post-wrapper">
    <h1>{title}</h1>
    <PostProperties post={data} />
    <PostContent content={content} />
    <PostReply id={id} />
</div>

<style>
    .post-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1400px;
    }

    .post-wrapper > h1 {
        font-size: 1.5rem;
    }

    @media (min-width: 640px) {
        .post-wrapper > h1 {
            font-size: 3rem;
        }
    }
</style>c