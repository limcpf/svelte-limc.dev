<script lang="ts" >
    import {onMount} from "svelte";
    import SelectForm from "$lib/components/admin/form/SelectForm.svelte";
    import InputForm from "$lib/components/admin/form/InputForm.svelte";
    import PostDto from "$lib/domain/Post/Post.dto";
    import SeriesPostDto from "$lib/domain/Series/SeriesPost.dto";
    import SeriesPatchDto from "$lib/domain/Series/SeriesPatch.dto";

    export let isUpdate: boolean = false;
    export let id: number = 0;
    export let formTitle: string;
    export let title = "";
    export let site = "";
    $: getTopic(site);
    export let topic = "";

    let sites: {key: string, value: string}[] = [];
    let topics: {key: string, value: string}[] = [];

    const actionText = isUpdate ? "시리즈 수정" : "시리즈 생성"

    onMount(async () => {
        const sitesFetch = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/site/list`, { credentials: "include" })
        sites = await sitesFetch.json() as {key:string, value: string}[];
    })

    async function getTopic(s: string) {
        if(!s) return;
        let topicFetch = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/topic/list/${s}`, { credentials: "include" })

        topics = await topicFetch.json() as {key:string, value:string}[]
    }

    async function submit() {
        const seriesDto
            = isUpdate
                ? new SeriesPatchDto(id, site, topic, title)
                : new SeriesPostDto(site, topic, title);
        try {
            const savePost = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/series`, {
                method: isUpdate ? "PATCH" : "POST",
                body: JSON.stringify(seriesDto),
                credentials: "include",
                headers: {
                    "Content-type" : "application/json"
                }
            });

            if(savePost.ok) {
                const json = await savePost.json() as PostDto;

                if(confirm(`${actionText}이 완료되었습니다. 해당 시리즈를 이동하시겠습니까?`)) {
                    location.href = "/admin/series/" + json.id
                } else {
                    location.href = "/admin/series"
                }

                return;
            }

            throw new Error(`${actionText} 실패하였습니다.`)
        } catch (e: any) {
            alert(e instanceof Error ? e.message : `알 수 없는 오류로 ${actionText} 실패하였습니다.`);
        }

    }
</script>

<div class="add-form">
    <h2>{formTitle}</h2>
    <div class="add-form-input-wrapper">
        <SelectForm title="사이트" bind:value={site} options={sites} required />
        <SelectForm title="주제" bind:value={topic} options={topics} required />
    </div>
    <InputForm title="제목" bind:value={title} required disabled={!site || !topic} />

    <button
            disabled={
            !title
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