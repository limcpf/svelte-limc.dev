<script lang="ts">
    import {onMount} from "svelte";
    import PostForm from "$lib/components/post/PostForm.svelte";
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
    <PostForm
            formTitle="게시글 수정"
            title={post.postTitle.title}
            site={post.siteDto.name}
            topic={post.topicDto.id}
            series={post.seriesDto ? post.seriesDto.id : ""}
            content={post.postContents.content}
            summary={post.postTitle.summary}
            isPublished={post.isPublished}
            id={post.id}
            isUpdate={true}
    />
{/if}