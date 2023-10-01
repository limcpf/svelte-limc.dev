<script lang="ts">


    export let id: number | string;
    export let link: string;
    export let deleteFunction: (id: number | string) => void
    
    const deleteEvent = async () => { await deleteFunction(id) }
</script>

<div class="admin-action-wrapper">
    <a class="admin-action-btn" href={`/admin/${link}/${id}`}>보기</a>
    <a class="admin-action-btn" href={`/admin/${link}/${id}/update`}>수정</a>
    <div class="admin-action-btn" on:click={deleteEvent}>삭제</div>
</div>


<style>
    .admin-action-wrapper {
        display: grid;
    }
    .admin-action-wrapper > div {
        grid-column: 1 span;
        grid-template-columns: repeat(1, 1fr);
    }
    .admin-action-btn {
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
    .admin-action-btn:hover {
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        transition: 0.2s ease-in-out;
    }

    @media (min-width: 640px) {
        .admin-action-wrapper {
            gap: 1rem;
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>