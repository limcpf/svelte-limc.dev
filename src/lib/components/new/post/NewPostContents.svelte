<script lang="ts">
    import type PostContentsDto from "$lib/domain/Post/PostContents.dto";
    import NewPostContentMd from "$lib/components/new/post/contents/NewPostContentMd.svelte";

    export let postContents: PostContentsDto;
    const { content, tableOfContent } = postContents;
</script>

<article class="markdown-body">
    <NewPostContentMd content={content} />
</article>
