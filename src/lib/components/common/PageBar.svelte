<script lang="ts">
    // TODO: 변수명 정리하기, by 필요한가? >> curpageBy 필요없을수도
    import type Page from "$lib/domain/Page";

    export let tPage:Page<T>;
    export let page: number;

    const pageSize = 5;
    const { pageable, totalPages } = tPage;
    const { pageNumber } = pageable;

    const byPage = totalPages % pageSize;
    const lastPage = Math.floor((totalPages - 1) / pageSize)
    const curPage = Math.floor(pageNumber / pageSize)

    const isFirst = curPage === 0;
    const isLast = lastPage === curPage;

    let pageNumArr = Array.from(new Array(isLast && byPage !== 0 ? byPage : pageSize), (v, i) => i + (curPage * 5) + 1);

    function movePage(isPrev: boolean) {
        return isPrev ? pageNumArr[0] - 5 : pageNumArr[pageNumArr.length - 1] + 1;
    }
</script>

{#if pageNumArr}
    <div class="page-btn-wrapper">
        {#if !isFirst}
            <div on:click={() => {page = movePage(true)}}>이전</div>
        {/if}
        {#each pageNumArr as num, idx}
                <a on:click={() => {page = num}}
                   class="page-btn"
                   aria-current={pageable.pageNumber + 1 === num}
                >
                    {num}
                </a>
        {/each}
        {#if !isLast}
            <div on:click={() => {page = movePage(false)}}>다음</div>
        {/if}
    </div>
{/if}

<style>
    .page-btn:hover {
        transition: 0.2s ease-in-out;
        background-color: rgba(0,0,0,0.1);
    }
    .page-btn {
        cursor:pointer;
        display: inline-block;
        padding: 0.5em 1em;
    }
    .page-btn[aria-current="true"] {
        font-weight: bold;
        text-decoration: underline;
        background-color: rgba(0,0,0,0.1);
    }
    .page-btn-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 5rem;
    }
</style>