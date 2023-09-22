<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import PostTitle from "../components/post/PostTitle.svelte";

    /** @type {import('./$types').PageData} */
	export let data: PostDto;
</script>

<PostTitle post={data} />
