<script lang="ts">
    import AdminPostList from "$lib/components/post/list/AdminPostList.svelte";

    async function loadPost(page: number) {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/post?page=${page}`, {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        return await req.json()
    }
</script>

<AdminPostList loadFunction={loadPost}/>