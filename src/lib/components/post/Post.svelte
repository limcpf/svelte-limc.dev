<script lang="ts">
    import PostContent from "$lib/components/post/PostContents.svelte";
    import PostReply from "$lib/components/post/PostReply.svelte";

    import TopicIcon from "$lib/components/icon/Topic.icon.svelte";
    import SeriesIcon from "$lib/components/icon/Series.icon.svelte";
    import TimeIcon from "$lib/components/icon/Time.icon.svelte";
    import Properties from "$lib/components/common/properties/Properties.svelte";
    import {getFormatDate} from "$lib/util/time.util";
    import type PostReadDto from "$lib/domain/Post/PostRead.dto";

    export let data: PostReadDto;

    const {
        id,
        siteDto,
        topicDto,
        seriesDto,
        postTitle,
        postContents,
        createdAt,
        updatedAt
    } = data

    const properties: PropertyProp[] = [
        {
            key: "주제",
            icon: TopicIcon,
            href: `/topic/${topicDto.id}`,
            value: topicDto.name
        }
    ];
    if(seriesDto) {
        properties.push(
            {
                key: "시리즈",
                icon: SeriesIcon,
                href: `/series/${seriesDto.id}`,
                value: seriesDto.title
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
    <h1>{postTitle.title}</h1>
    <Properties properties={properties} title="글 정보" />
    <PostContent postContents={postContents} />
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