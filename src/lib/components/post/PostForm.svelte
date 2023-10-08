<script lang="ts">
    import {onMount} from "svelte";
    import SelectForm from "$lib/components/admin/form/SelectForm.svelte";
    import InputForm from "$lib/components/admin/form/InputForm.svelte";
    import TextAreaForm from "$lib/components/admin/form/TextAreaForm.svelte";
    import PostDto from "$lib/domain/Post/Post.dto";
    import PostListPreview from "$lib/components/post/list/PostListPreview.svelte";
    import PostPreview from "$lib/components/post/PostPreview.svelte";
    import PostUpdateDto from "$lib/domain/Post/PostUpdate.dto";
    import {generatorToc} from "$lib/util/markdown.util";
    import type PostReadDto from "$lib/domain/Post/PostRead.dto";

    export let isUpdate: boolean = false;
    export let id: number = 0;
    export let formTitle: string;
    export let title = "";
    export let site = "";
    $: getTopic(site);
    export let topic = "";
    $: getSeries(topic);
    export let series = "";
    export let summary = "";
    export let content = "";

    export let isPublished = false;


    let showListPreview = false;
    let showPreview = false;
    let previewPostDto: PostDto | undefined = undefined;

    let sites: {key: string, value: string}[] = [];
    let topics: {key: string, value: string}[] = [];
    let seriesList: {key: string, value: string}[] = [];

    onMount(async () => {
        const sitesFetch = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/site/list`, { credentials: "include" })
        sites = await sitesFetch.json() as {key:string, value: string}[];
    })

    async function getTopic(s: string) {
        topic = "";
        series = "";
        if(!s) return;
        let topicFetch = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/topic/list/${s}`, { credentials: "include" })

        topics = await topicFetch.json() as {key:string, value:string}[]
    }
    async function getSeries(t: string) {
        series = "";
        if(!t) return;
        let seriesFetch = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/series/list/${t}`, { credentials: "include" })

        seriesList = await seriesFetch.json() as {key:string, value:string}[]
    }

    function toggleListPreview() {
        showListPreview = !showListPreview;
        if(!showListPreview) previewPostDto = undefined;
        else previewPostDto = new PostDto(title, content, summary, site, 0, "", true, 0, 0, "");
    }

    function togglePreview() {
        showPreview = !showPreview;
    }

    async function submit() {
        let tableOfContents = generatorToc(content);

        const postDto =
            new PostUpdateDto(title, summary, tableOfContents, content, site, topic, isPublished, id, series);

        try {
            const savePost = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/post`, {
                method: isUpdate ? "PATCH" : "POST",
                body: JSON.stringify(postDto),
                credentials: "include",
                headers: {
                    "Content-type" : "application/json"
                }
            });

            if(savePost.ok) {
                const json = await savePost.json() as PostReadDto;

                if(confirm("게시글 작성이 완료되었습니다. 해당 게시글로 이동하시겠습니까?")) {
                    location.href = "/admin/post/" + json.id
                } else {
                    location.href = "/admin/post"
                }

                return;
            }

            throw new Error("게시글 작성 실패하였습니다.")
        } catch (e: any) {
            alert(e instanceof Error ? e.message : "알 수 없는 오류로 게시글 작성 실패하였습니다.");
        }

    }
</script>

<div class="add-form">
    <h2>{formTitle}</h2>
    <div class="add-form-input-wrapper">
        <SelectForm bind:value={site} options={sites} required title="사이트" />
        <SelectForm bind:value={topic} options={topics} required title="주제" />
    </div>
    <SelectForm bind:value={series} options={seriesList} title="시리즈" />

    <button disabled={!(title && summary)} on:click={toggleListPreview}>제목 및 요약 미리보기</button>
    {#if showListPreview && previewPostDto}
        <PostListPreview post={previewPostDto} />
    {:else}
        <InputForm title="제목" bind:value={title} required disabled={!site || !topic} />
        <TextAreaForm title="요약" bind:value={summary} required disabled={!site || !topic} rows={5}/>
    {/if}

    <button disabled={!content} on:click={togglePreview}>내용 미리보기</button>
    {#if showPreview && content }
        <PostPreview content={content} />
    {:else}
        <TextAreaForm title="내용" bind:value={content} required disabled={!site || !topic} rows={10}/>
    {/if}

    <button
            disabled={
            !title
            || !summary
            || !content
            || !site
            || !topic
        }
            on:click={submit}
    >작성</button>
</div>

<style>
    .add-form {
        width: 100%;
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 5em;
    }


    .add-form-input-wrapper {
        width: 100%;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(2, 1fr);
    }

    button {
        width: 100%;
        padding: 0.5em;
        margin-top: 1em;
        margin-bottom: .5em;
    }
</style>