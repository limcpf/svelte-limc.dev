<script lang="ts">
    import PostList from "$lib/components/post/list/PostList.svelte";
    import Page from "$lib/domain/Page.js";
    import PostDto from "$lib/domain/Post/Post.dto.js";

    async function loadPost(page: number) {
        const req = await fetch(`http://localhost:8080/public/post/site/DEV?page=${page}`)
        const json = await req.json() as Page<PostDto>
        return json
    }
</script>

<PostList loadFunction={loadPost}/>