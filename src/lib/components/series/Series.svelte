<script lang="ts">
    import type SeriesDetailDto from "$lib/domain/Series/SeriesDetail.dto";
    import TopicIcon from "$lib/components/icon/Topic.icon.svelte";
    import TimeIcon from "$lib/components/icon/Time.icon.svelte";
    import PostIcon from "$lib/components/icon/Post.icon.svelte";
    import {getFormatDate} from "$lib/util/time.util";
    import Properties from "$lib/components/common/properties/Properties.svelte";
    import {TAB_NAME} from "$lib/constants/string";
    import Tabs from "$lib/components/common/tabs/Tabs.svelte";
    import PostList from "$lib/components/post/list/PostList.svelte";
    import Page from "$lib/domain/Page";
    import PostDto from "$lib/domain/Post/Post.dto";

    export let data: SeriesDetailDto;

    let tab = TAB_NAME.POST;

    const {
        id,
        site,
        topic,
        topicName,
        title,
        postCnt,
        createdAt
    } = data

    const properties: PropertyProp[] = [
        {
            key: "주제",
            icon: TopicIcon,
            href: `/topic/${topic}`,
            value: topicName
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
            text: "게시글",
            key: TAB_NAME.POST,
        }
    ]

    async function loadPostBySeries(page: number) {
        const req = await fetch(`http://localhost:8080/public/post/series/${id}?page=${page}`)
        return await req.json() as Page<PostDto>
    }
</script>

<div class="series-wrapper">
    <h1 class="before-title">{title}</h1>
    <Properties title="시리즈 정보" properties={properties} />
    <div class="content">
        <Tabs currentKey={tab} btns={btns}/>
        {#if tab === TAB_NAME.POST}
            <PostList loadFunction={loadPostBySeries}/>
        {/if}
    </div>
</div>

<style>
    .series-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1400px;
    }

    .series-wrapper > h1 {
        font-size: 1.5rem;
    }
    .before-title::before {
        content: "시리즈";
    }

    .content {
        width: 100%;
        margin-top: 2rem;
        max-width: 1024px;
    }

    @media (min-width: 640px) {
        .series-wrapper > h1 {
            font-size: 3rem;
        }
    }
</style>