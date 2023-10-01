<script lang="ts">
    export let isPublished: boolean;
    export let id: number | undefined;

    const publishText = !isPublished ? "발행" : "발행 취소"
    const togglePublish = async () =>
    {
        try {
            await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/post/publish/${id}`, {
                credentials: "include"
            });

            alert(`${publishText} 하였습니다.`);
            location.reload();
        } catch (e: any) {
            alert(`${publishText} 실패하였습니다.`)
        }
    }

    const deletePost = async () =>
    {
        try {
            if(!confirm("진짜 게시글을 삭제하시겠습니까?")) return;

            await fetch(`${import.meta.env.VITE_API_SERVER_URL}/private/post/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-type" : "application/json"
                },
            });

            alert(`게시글 삭제 하였습니다.`);
            location.reload();
        } catch (e: any) {
            alert(`게시글 삭제 실패하였습니다.`)
        }
    }

</script>

<div class="admin-post-wrapper">
    <div class="admin-post-btn" on:click={togglePublish}>{publishText}</div>
    <a class="admin-post-btn" href={`/admin/post/${id}`}>보기</a>
    <a class="admin-post-btn" href={`/admin/post/${id}/update`}>수정</a>
    <div class="admin-post-btn" on:click={deletePost}>삭제</div>
</div>


<style>
    .admin-post-wrapper {
        display: grid;
    }
    .admin-post-wrapper > div {
        grid-column: 1 span;
        grid-template-columns: repeat(2, 1fr);
    }
    .admin-post-btn {
        margin: .3em 0;
        padding: .8em .5em;

        font-size: 1.1em;
        letter-spacing: .1em;

        display: flex;
        justify-content: center;
        align-content: center;

        cursor: pointer;
        border-radius: .5rem;
        background-color: rgba(255,255,255,0.5);
        color: black;
    }
    .admin-post-btn:hover {
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        transition: 0.2s ease-in-out;
    }

    @media (min-width: 640px) {
        .admin-post-wrapper {
            gap: 1rem;
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>