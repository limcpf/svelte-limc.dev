<script lang="ts">
    import type Page from "$lib/domain/Page";

    export let title: string;
    export let page: Page<T>;

    let total;
    let curPage;
    if(page) {
        total = page.totalPages;
        curPage = page.pageable.pageNumber + 1;
    }
</script>

<div class="post-list-header">
    <span class="header-title">{title}</span>
    {#if page}<span class="page-info">총 {total}페이지 중 현재 {curPage}번째 페이지</span>{/if}
</div>

<style>
    .post-list-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding: 1em 0 .1em 0;
        margin: 1em 0;
    }

    .header-title {
        font-size: 1.3rem;
        font-weight: bold;
    }
    .page-info {
        display: flex;
        align-items: end;
        font-size:0.7rem;
        font-weight: lighter;
        color:darkgrey;
    }
    @media (min-width: 640px) {
        .post-list-header {
            padding: 0 0 .5em 0;
        }
    }
</style>