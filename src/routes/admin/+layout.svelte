<script lang="ts">
    import Login from "$lib/components/admin/Login.svelte";
    import MenuBar from "$lib/components/menu/MenuBar.svelte";

    export let data: { authorization: string }

    const menus: Menu[] = [
        {
            text: "글",
            href: "/admin/post",
            startWith: true
        },
        {
            text: "주제",
            href: "/admin/topic",
            startWith: true
        },
        {
            text: "시리즈",
            href: "/admin/series",
            startWith: true
        }
    ]
</script>
{#if data.authorization}
    <div class="admin-menu">
        <MenuBar menus={menus} isAdmin={true}/>
    </div>
    <slot />
{:else}
    <Login />
{/if}
<style>
    .admin-menu {
        width: 100%;
        background-color: rgba(0,0,0,0.02);
        padding: 0 1em;
    }
</style>