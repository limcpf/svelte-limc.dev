<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    import type PostDto from "$lib/domain/Post/Post.dto";

    /** @type {import('./$types').PageData} */
    export let data: PostDto;

</script>

<svelte:head>
    <title>싱싱한 코딩</title>
</svelte:head>

<div class="recent-header"><a>최신 글</a><a href="/post">글 목록</a></div>
<Post data={data} />

<style>
    div.recent-header {
        width: 100%;
        max-width: 1024px;
        border-bottom: 1px solid darkgrey;
        align-items: end;
        padding-bottom: 0.3em;
        display: flex;
        justify-content: space-between;
    }
    div.recent-header > a:first-child {
        font-size:1.3em;
        font-weight: bold;
    }
    div.recent-header > a:nth-child(2) {
        text-decoration: underline;
    }
</style>