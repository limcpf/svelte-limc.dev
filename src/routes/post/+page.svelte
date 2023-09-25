<script lang="ts">
    import PostList from "$lib/components/post/list/PostList.svelte";
    import Page from "$lib/domain/Page.js";
    import PostDto from "$lib/domain/Post/Post.dto.js";

    async function loadPost(page: number) {
        const req = await fetch(`http://localhost:8080/public/post/site/DEV?page=${page}`)
        return await req.json() as Page<PostDto>
    }
</script>

<PostList loadFunction={loadPost}/>