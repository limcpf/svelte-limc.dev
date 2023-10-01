<script lang="ts">
    import AdminTopicList from "$lib/components/topic/list/AdminTopicList.svelte";

    async function load(page: number) {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/topic?page=${page}`, {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        return await req.json()
    }
</script>

<AdminTopicList loadFunction={load}/>