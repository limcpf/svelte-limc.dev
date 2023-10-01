<script lang="ts" >
    import {onMount} from "svelte";
    import SelectForm from "$lib/components/admin/form/SelectForm.svelte";
    import InputForm from "$lib/components/admin/form/InputForm.svelte";
    import PostDto from "$lib/domain/Post/Post.dto";
    import TopicDto from "$lib/domain/Topic/Topic.dto";

    export let isUpdate: boolean = false;
    export let id: number = 0;
    export let formTitle: string;
    export let name = "";
    export let site = "";

    let sites: {key: string, value: string}[] = [];

    const actionText = isUpdate ? "주제 수정" : "주제 생성"

    onMount(async () => {
        const sitesFetch = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/site/list`, { credentials: "include" })
        sites = await sitesFetch.json() as {key:string, value: string}[];
    })

    async function submit() {
        const topicDto = new TopicDto(site, name, id)
        try {
            const savePost = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/topic`, {
                method: isUpdate ? "PATCH" : "POST",
                body: JSON.stringify(topicDto),
                credentials: "include",
                headers: {
                    "Content-type" : "application/json"
                }
            });

            if(savePost.ok) {
                const json = await savePost.json() as PostDto;

                if(confirm(`${actionText}이 완료되었습니다. 해당 주제로 이동하시겠습니까?`)) {
                    location.href = "/admin/topic/" + json.id
                } else {
                    location.href = "/admin/topic"
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
    <SelectForm title="사이트" bind:value={site} options={sites} required />
    <InputForm title="이름" bind:value={name} required disabled={!site} />

    <button
            disabled={ !name || !site }
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


    button {
        width: 100%;
        padding: 0.5em;
        margin-top: 1em;
        margin-bottom: .5em;
    }
</style>