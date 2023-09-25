<script lang="ts">
    import TimeIcon from "$lib/components/icon/Time.icon.svelte";
    import PostIcon from "$lib/components/icon/Post.icon.svelte";
    import SeriesIcon from "$lib/components/icon/Series.icon.svelte";
    import {getFormatDate} from "$lib/util/time.util";
    import Properties from "$lib/components/common/properties/Properties.svelte";
    import {TAB_NAME} from "$lib/constants/string";
    import Tabs from "$lib/components/common/tabs/Tabs.svelte";
    import PostList from "$lib/components/post/list/PostList.svelte";
    import Page from "$lib/domain/Page";
    import PostDto from "$lib/domain/Post/Post.dto";
    import type SeriesListDto from "$lib/domain/Series/SeriesList.dto";
    import type TopicDetailDto from "$lib/domain/Topic/TopicDetail.dto";
    import SeriesList from "$lib/components/series/list/SeriesList.svelte";

    export let data: TopicDetailDto;

    let tab = TAB_NAME.SERIES;

    const {
        id,
        site,
        name,
        seriesCnt,
        postCnt,
        createdAt
    } = data

    const properties: PropertyProp[] = [
        {
            key: "시리즈 개수",
            icon: SeriesIcon,
            value: `${seriesCnt} 개`
        },
        {
            key: "글 개수",
            icon: PostIcon,
            value: `${postCnt} 개`
        },
        {
            key: "생성일시",
            icon: TimeIcon,
            value: getFormatDate(createdAt)
        },
    ];

    const btns = [
        {
            text: "시리즈",
            key: TAB_NAME.SERIES,
        },
        {
            text: "게시글",
            key: TAB_NAME.POST,
        }
    ]

    async function loadPostByTopic(page: number) {
        const req = await fetch(`http://localhost:8080/public/post/topic/${id}?page=${page}`)
        return await req.json() as Page<PostDto>
    }
    async function loadSeriesByTopic(page: number) {
        const req = await fetch(`http://localhost:8080/public/series/topic/${id}?page=${page}`)
        return await req.json() as Page<SeriesListDto>
    }
</script>

<div class="topic-wrapper">
    <h1 class="before-title">{name}</h1>
    <Properties title="시리즈 정보" properties={properties} />
    <div class="content">
        <Tabs bind:currentKey={tab} btns={btns}/>
        {#if tab === TAB_NAME.SERIES}
            <SeriesList loadFunction={loadSeriesByTopic}/>
        {/if}
        {#if tab === TAB_NAME.POST}
            <PostList loadFunction={loadPostByTopic}/>
        {/if}
    </div>
</div>

<style>
    .topic-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1400px;
    }

    .topic-wrapper > h1 {
        font-size: 1.5rem;
    }
    .before-title::before {
        content: "주제";
    }

    .content {
        width: 100%;
        margin-top: 2rem;
        max-width: 1024px;
    }


    @media (min-width: 640px) {
        .topic-wrapper > h1 {
            font-size: 3rem;
        }
    }
</style>