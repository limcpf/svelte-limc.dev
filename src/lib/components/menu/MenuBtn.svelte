<script lang="ts">
    import { page } from '$app/stores';
    export let menu: Menu;

    const { text, href, startWith } = menu

    let isActive = false;

    const path = $page.url.pathname;
    $: isActive = startWith ? $page.url.pathname.startsWith(href) : $page.url.pathname === href
</script>

<a class="menu-text" href={href} aria-current={isActive}>{text}</a>

<style>
    a.menu-text {
        display: inline-block;
        padding: 0.5rem 0.8rem;
        font-weight: lighter;
    }
    [aria-current="true"] {
        font-weight: bold!important;
    }
    [aria-current="false"] {
        font-weight: normal;
    }
    @media (min-width: 640px) {
        a.menu-text {
            padding: 0.5rem 1rem;
        }
    }
</style>