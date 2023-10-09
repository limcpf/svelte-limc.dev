<script lang="ts">
    import LoadingIcon from "$lib/components/icon/Loading.icon.svelte"
    import FolderIcon from "$lib/components/icon/Folder.icon.svelte"
    import PostIcon from "$lib/components/icon/Post.icon.svelte"

    export let data: { list: string[] };

    let path = ""
    let list = data.list;

    async function move(text?: string) {
        if(text) {
            path = text;
        } else {
            const paths = path.split("/");
            paths.pop();
            paths.pop();
            path = paths.join("/")
        }

        try {
            list = [];
            const p = path ? `?path=${text}` : "";
            const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/images${p}`, {
                credentials: "include"
            });

            list = await req.json() as string[];
        } catch (e) {
            console.debug(e);
            alert("text 이상으로 이동하지 못함!")
        }
    }

    async function deleteImage(text: string) {
        if(!confirm(`${text} 이미지를 삭제하시겠습니까?`)) return;

        try{
            const req = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/image?name=${text}`, {
                method: "DELETE",
                credentials: "include"
            });
            if(!req.ok) throw new Error(`이미지 삭제 요청 중 실패하였습니다.`)

            alert("정상적으로 이미지를 삭제하였습니다!")
            await move(path);
        } catch (e) {
            console.error(e);
            alert(e instanceof Error ? e.message : `${text} 이미지 삭제에 실패하였습니다.`)
        }
    }
</script>

<h1>이미지 리스트</h1>
<div class="image-wrapper">
    <div class="list-element">
        <span>path : {path || "/"}</span>
        <a href="/admin/image/add">
            이미지 추가
        </a>
    </div>
    {#if path}
        <div class="list-element folder" on:click={() => { move() }}>
            <svelte:component this={FolderIcon} />
            <span>..</span>
        </div>
    {/if}
    {#if list.length > 0}
        {#each list as text}
            {#if text[text.length - 1] === "/"}
                <div class="list-element folder" on:click={() => { move(text) }}>
                    <svelte:component this={FolderIcon} />
                    <span>{text}</span>
                </div>
            {:else}
                <div class="list-element image">
                    <div><svelte:component this={PostIcon} /></div>
                    <div class="file-name">
                        <span>{text}</span>
                        <div class="file-name-action">
                            <a
                                    href={`https://files.limc.dev/file/limckr/${text}`}
                                    target="_blank"
                            >보기</a>
                            <span on:click={() => { deleteImage(text) }}>삭제</span>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    {:else}
        <div>
            <svelte:component this={LoadingIcon} />
        </div>
    {/if}
    <div class="list-element">
        <span>리스트 개수 : {list.length > 0 ? list.length : "..."}</span>
    </div>
</div>

<style>
    .image-wrapper {
        width: 100%;
        max-width: 1024px;
        margin-bottom: 10em;
    }
    .list-element {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 1em 0.5em;
        transition: .2s ease-in-out;
        cursor: pointer;
    }
    .list-element:nth-child(2n-1) {
        background-color: rgba(0,0,0,0.05);
    }
    .list-element:hover {
        background-color: rgba(0,0,0,0.1);
    }
    .list-element:first-child, .list-element:last-child {
        padding: 0.7em;
        cursor: default;
        background-color: rgba(0,0,0,0.05);
        font-size: 0.8em;
        color: rgb(128, 128, 128);
        font-weight: lighter;
        justify-content: space-between;
    }
    .list-element > div {
        width:20px;
    }
    .list-element > span {
        margin-left: 5px;
    }
    .folder {
        font-weight: bold;
    }
    .image .file-name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: lighter;
        font-size: 0.9em;
    }
</style>