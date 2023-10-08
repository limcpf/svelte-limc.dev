<script lang="ts">
    import type PostContentsDto from "$lib/domain/Post/PostContents.dto";
    import PostContentMd from "$lib/components/post/contents/PostContentMd.svelte";
    import PostTableOfContents from "$lib/components/post/contents/PostTableOfContents.svelte";

    export let postContents: PostContentsDto;
    const { content, tableOfContent } = postContents;
</script>

<article class="markdown-body">
    <PostTableOfContents tableOfContents={tableOfContent} />
    <PostContentMd content={content} />
</article>
