<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import type PostDto from "$lib/domain/Post/Post.dto";
    import { onMount} from "svelte";

    /** @type {import('./$types').PageData} */
    export let data: {id: number};

    let post: PostDto;

    onMount(async () => {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/post/${data.id}`, {
            credentials: "include"
        })

        post = await req.json() as PostDto;
    })

</script>

{#if post}
    <Post data={post}/>
{/if}