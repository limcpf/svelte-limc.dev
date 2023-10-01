<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import PostListBlockPreview from "$lib/components/post/list/PostListBlockPreview.svelte";

    export let post: PostDto
</script>

<div class="list-wrapper">
    <PostListBlockPreview postDto={post} />
</div>