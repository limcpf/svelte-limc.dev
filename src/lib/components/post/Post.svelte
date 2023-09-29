<script lang="ts">
    import type PostDto from "$lib/domain/Post/Post.dto";
    import PostContent from "$lib/components/post/PostContent.svelte";
    import PostReply from "$lib/components/post/PostReply.svelte";

    import TopicIcon from "$lib/components/icon/Topic.icon.svelte";
    import SeriesIcon  from "$lib/components/icon/Series.icon.svelte";
    import TimeIcon  from "$lib/components/icon/Time.icon.svelte";
    import Properties from "$lib/components/common/properties/Properties.svelte";
    import {getFormatDate} from "$lib/util/time.util";

    export let data: PostDto;

    const {
        id,
        title,
        topic,
        topicName,
        series,
        seriesName,
        content,
        summary,
        createdAt,
        updatedAt
    } = data

    const properties: PropertyProp[] = [
        {
            key: "주제",
            icon: TopicIcon,
            href: `/topic/${topic}`,
            value: topicName
        }
    ];
    if(series && seriesName) {
        properties.push(
            {
                key: "시리즈",
                icon: SeriesIcon,
                href: `/series/${series}`,
                value: seriesName
            }
        )
    }
    if(createdAt && updatedAt) {
        const dates = [
            {
                key: "생성일시",
                icon: TimeIcon,
                value: getFormatDate(createdAt)
            },
            {
                key: "수정일시",
                icon: TimeIcon,
                value: getFormatDate(updatedAt)
            }
        ];

        properties.push(...dates)
    }

</script>


<div class="post-wrapper">
    <h1>{title}</h1>
    <Properties title="글 정보" properties={properties} />
    <PostContent content={content} />
    <PostReply id={id} />
</div>

<style>
    .post-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1400px;
    }

    .post-wrapper > h1 {
        font-size: 1.5rem;
    }

    @media (min-width: 640px) {
        .post-wrapper > h1 {
            font-size: 3rem;
        }
    }
</style>