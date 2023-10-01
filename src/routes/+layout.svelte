<script lang="ts">

 import {page} from "$app/stores";
 import TopBtn from "$lib/components/menu/TopBtn.svelte";
 import MenuBar from "$lib/components/menu/MenuBar.svelte";

 const menus: Menu[] = [
         {
           text: "글",
           href: "/post",
           startWith: true
         },
         {
          text: "주제",
          href: "/topic",
          startWith: true
         },
         {
          text: "시리즈",
          href: "/series",
          startWith: true
         },
         {
          text: "소개",
          href: "/intro",
          startWith: false
         }
 ]

 const curPath = $page.url.pathname;
</script>

<nav class="menu-wrapper">
    <MenuBar menus={menus} />
</nav>
<main class="blog-wrapper">
 <slot />
</main>
<TopBtn />

<style>
    nav {
        display: flex;
        justify-content: center;
        width:100%;
        background-color: rgba(0,0,0,0.01);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        margin-bottom: 0.5rem;
    }

    main.blog-wrapper {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 640px) {
        nav {
            margin-bottom: 1rem;
        }

        main.blog-wrapper {
            padding: 10px 45px;
        }

    }
</style>