<script lang="ts">
    import TopicIcon from "../icon/Topic.icon.svelte";
    import SeriesIcon from "../icon/Series.icon.svelte";
    import TimeIcon from "../icon/Time.icon.svelte";
    import type PostDto from "$lib/domain/Post/Post.dto";
    export let post:PostDto
    let showProperties = true;

    const {
        title,
        topic,
        topicName,
        series,
        seriesName,
        createdAt,
        updatedAt
    } = post

    let hasSeries = series && seriesName;

    let topicIcon = TopicIcon;
    let seriesIcon = SeriesIcon;
    let timeIcon = TimeIcon;
</script>

<div class="properties">
    <div class="properties-title">
        <span>글 정보</span>
        <div on:click={() => {showProperties = !showProperties}} class="properties-toggle-btn">
            {showProperties ? "접기" : "펼치기"}
        </div>
    </div>
    {#if showProperties}
        <div class="properties-row">
            <div class="properties-key">
                <svelte:component this={topicIcon} />
                <span class="key-name">주제</span>
            </div>
            <div class="properties-value">
                <div class="properties-topic">
                    <a class="href-icon" href={`/topic/${topic}`}>{topicName}</a>
                </div>
            </div>
        </div>
        {#if hasSeries}
            <div class="properties-row">
                <div class="properties-key">
                    <svelte:component this={seriesIcon} />
                    <span class="key-name">시리즈</span>
                </div>
                <div class="properties-value">
                    <a class="href-icon" href={`/series/${series}`}>{seriesName}</a>
                </div>
            </div>
        {/if}
        {#if createdAt}
            <div class="properties-row">
                <div class="properties-key">
                    <svelte:component this={timeIcon} />
                    <span class="key-name">작성일시</span>
                </div>
                <div class="properties-value">
                    <div class="properties-date">{new Intl.DateTimeFormat("ko-KR", { dateStyle: 'long', timeStyle: 'medium' }).format(new Date(createdAt))}</div>
                </div>
            </div>
        {/if}
        {#if updatedAt}
            <div class="properties-row">
                <div class="properties-key">
                    <svelte:component this={timeIcon} />
                    <span class="key-name">수정일시</span>
                </div>
                <div class="properties-value">
                    <div class="properties-date">{new Intl.DateTimeFormat("ko-KR", { dateStyle: 'long', timeStyle: 'medium' }).format(new Date(updatedAt))}</div>
                </div>
            </div>
        {/if}
    {/if}
</div>

<style>
    .properties {
        width: 100%;
        max-width: 640px;
    }
    .properties-row {
        display: grid;
        padding: 3px;
        margin: 1px 0;
        grid-template-columns: repeat(12, 1fr);
        border-radius: 0.5em;
        border : 2px solid rgba(0,0,0,0);
    }

    .properties-row:hover{
        transition: 100ms ease-in-out;
        border: 2px solid lightgray;
    }

    .properties-key, .properties-value {
        padding: 0.2rem 0.7rem;
        font-size: 0.8rem;
    }

    .properties-key {
        display: flex;
        align-items: center;
        grid-column: 1/5;
        color: rgb(128, 128, 128);
        border-right: 0;
    }
    .properties-key > span.key-name {
        margin-left: 5px;
    }

    .properties-value {
        grid-column: 5/13;
    }

    .properties-title {
        display: flex;
        justify-content: space-between;
        padding: 0.5em 5px;
        margin-bottom: 0.3em;
        border-bottom: 1px solid lightgray;
    }
    .properties-title > span{
        font-weight: bold;
    }
    .properties-toggle-btn {
        font-size: 0.8em;
        display: flex;
        align-items: end;
        font-weight: lighter;
    }
    .properties-toggle-btn:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    @media (min-width: 640px) {
        .properties {
            max-width: 1024px;
        }
        .properties-key {
            grid-column: 1/3;
            border-right: 1px solid lightgrey;
        }
        .properties-value {
            grid-column: 3/13;
        }
        .properties-key, .properties-value {
            padding: 0.3rem 1rem;
            font-size: 0.9rem;
        }
        .properties-toggle-btn {
            font-size: 0.9em;
        }
    }
</style>
