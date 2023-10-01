<script lang="ts">
    import MenuBtn from "$lib/components/menu/MenuBtn.svelte";

    export let menus: Menu[]
    export let isAdmin: boolean

</script>

<div class="menu">
    {#if !isAdmin}<a href="/" class="blog-title before-title">싱 코</a>{/if}
    <div class="menu-bar">
        {#each menus as item, idx}
            <MenuBtn menu={item}/>
        {/each}
    </div>
</div>

<style>
    .menu {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0.8rem 0;
        max-width: 1400px;
    }
    .blog-title {
        display: inline-block;
        padding: 0 1.5em;
        margin-right: 0.5rem;
        border-right: 1px solid lightgray;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
    }
    .blog-title::before {
        content: "싱싱한:코딩";
    }

    div.menu-bar { overflow-x:hidden; white-space:nowrap; }

    @media (min-width: 640px) {
        .menu {
            padding: 1rem 0;
        }

        .blog-title {
            padding: 0.5rem 3rem 0.5rem 3rem;
            margin-right: 1rem;
            border-right: 1px solid lightgray;
            font-size: 1.5rem;
        }
    }
</style>