<script lang="ts">


    import {TAB_NAME} from "$lib/constants/string";

    export let currentKey: TAB_NAME;
    export let btns: TabButton[];


</script>

<div class="btn-bar">
    {#each btns as btn}
        <div
            class="btn"
            aria-current={currentKey === btn.key}
            on:click={() => currentKey = btn.key}
        >
            {btn.text}
        </div>
    {/each}
</div>

<style>
    .btn-bar {
        width: 100%;
        border-bottom: 1px solid lightgray;
        display: flex;
    }
    .btn:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: rgba(0,0,0,0.03);
        transition: 0.2s ease-in-out;
    }
    .btn {
        padding: 0.8rem 2rem;
        color: rgb(128, 128, 128);
        font-size: 0.8em;
    }
    .btn[aria-current="true"] {
        color: black;
        font-weight: bold;
        text-decoration: underline;
        background-color: rgba(0,0,0,0.08);
    }
</style>

