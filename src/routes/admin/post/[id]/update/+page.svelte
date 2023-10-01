<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import {onMount} from "svelte";
    import PostForm from "$lib/components/post/PostForm.svelte";

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
    <PostForm
            formTitle="게시글 수정"
            bind:title={post.title}
            bind:site={post.site}
            bind:topic={post.topic}
            bind:series={post.series}
            bind:content={post.content}
            bind:summary={post.summary}
            bind:id={post.id}
            isUpdate={true}
    />
{/if}