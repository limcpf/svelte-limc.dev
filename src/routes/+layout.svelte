<script lang="ts">

 import MenuBtn from "$lib/components/menu/MenuBtn.svelte";
 import {page} from "$app/stores";
 import TopBtn from "$lib/components/menu/TopBtn.svelte";

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
          href: "/me",
          startWith: false
         }
 ]

 const curPath = $page.url.pathname;
</script>

<nav class="menu-wrapper">
    <div class="menu">
        <a href="/" class="blog-title">싱코</a>
        <div class="menu-bar">
            {#each menus as item, idx}
                <MenuBtn menu={item}/>
            {/each}
        </div>
    </div>
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
        letter-spacing: 0.3em;
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
    div.menu-bar { overflow-x:hidden; white-space:nowrap; }

    @media (min-width: 640px) {
        nav {
            margin-bottom: 1rem;
        }
        .menu {
            padding: 1rem 0;
        }
        main.blog-wrapper {
            padding: 10px 45px;
        }

        .blog-title {
            padding: 0.5rem 3rem 0.5rem 3rem;
            margin-right: 1rem;
            border-right: 1px solid lightgray;
            font-size: 1.5rem;
        }
    }
</style>