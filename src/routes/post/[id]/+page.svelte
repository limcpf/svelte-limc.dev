<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import type PostDto from "$lib/domain/Post/Post.dto";

    /** @type {import('./$types').PageData} */
    export let data: PostDto;
</script>

<Post data={data}/>