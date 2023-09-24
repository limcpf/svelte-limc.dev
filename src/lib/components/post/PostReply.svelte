<script lang="ts">
    export let id:number | undefined;
    let show = false;
</script>

<div class="post-reply-wrapper">
    {#if show}
        <script src="https://utteranc.es/client.js"
                repo="limcpf/limcdev-comments"
                issue-term={`/post/${id}`}
                theme="github-light"
                crossorigin="anonymous"
                async
        />
    {:else}
        <div class="post-reply" on:click={() => { show = true }}>
            😊
            <br />
            댓글 확인을 원하시면
            <br />
            해당 부분을 눌러주세요!
            <br />
            (댓글 불러오는 과정에서 추가적인 데이터 요청이 필요합니다.)
        </div>
    {/if}
</div>

<style>
    .post-reply-wrapper {
        width: 100%;
        max-width: 1024px;
        margin-bottom: 3em;

        text-align: center;
    }

    .post-reply {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5em 0;
        border-radius: 1rem;
        background-color: rgba(0,0,0,0.1);

        font-size: 0.8rem;
        color: rgb(128, 128, 128);
        font-weight: lighter;
    }

    @media (min-width: 640px) {
        .post-reply {
            font-size: 1em;
        }
    }

</style>