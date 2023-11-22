<script lang="ts">
    import type PostReadDto from "$lib/domain/Post/PostRead.dto";
    import NewPostContents from "$lib/components/new/post/NewPostContents.svelte";

    /** @type {import('./$types').PageData} */
    export let data: { props : {
        postReadDto : PostReadDto
    }};

    const postReadDto = data.props.postReadDto;
</script>

<svelte:head>
    <title>싱싱한 코딩</title>
</svelte:head>

<div class="recent-header"><span>최신 글</span><a href="/post">글 목록</a></div>
<NewPostContents postContents="{postReadDto.postContents}"></NewPostContents>

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
    div.recent-header > span {
        font-size:1.3em;
        font-weight: bold;
    }
    div.recent-header > a {
        text-decoration: underline;
    }
</style>