<script lang="ts">
    import AdminSeriesList from "$lib/components/series/list/AdminSeriesList.svelte";

    async function load(page: number) {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/series?page=${page}`, {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        return await req.json()
    }
</script>

<AdminSeriesList loadFunction={load}/>