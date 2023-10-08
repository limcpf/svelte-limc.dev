<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import {onMount} from "svelte";
    import type PostReadDto from "$lib/domain/Post/PostRead.dto";

    /** @type {import('./$types').PageData} */
    export let data: {id: number};

    let post: PostReadDto;

    onMount(async () => {
        const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/post/${data.id}`, {
            credentials: "include"
        })

        post = await req.json() as PostReadDto;
    })

</script>

{#if post}
    <Post data={post}/>
{/if}