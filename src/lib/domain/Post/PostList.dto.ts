import type SiteDto from "$lib/domain/Site/Site.dto";
import type TopicDto from "$lib/domain/Topic/Topic.dto";
import type SeriesDto from "$lib/domain/Series/Series.dto";
import type PostTitleDto from "$lib/domain/Post/PostTitle.dto";
import type PostContentsDto from "$lib/domain/Post/PostContents.dto";
import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class PostListDto extends BaseTimeDto{
    id?: number;
    siteDto: SiteDto;
    topicDto: TopicDto;
    seriesDto?: SeriesDto;
    postTitle: PostTitleDto;
    isPublished: Boolean

    constructor(
        siteDto: SiteDto,
        topicDto: TopicDto,
        postTitle: PostTitleDto,
        isPublished: Boolean,
        id?: number,
        seriesDto?: SeriesDto,
        createdAt?: string,
        updatedAt?: string
    ) {
        super(createdAt, updatedAt)
        this.siteDto = siteDto
        this.topicDto = topicDto
        this.postTitle = postTitle
        this.isPublished = isPublished
        this.id = id
        this.seriesDto = seriesDto
    }
}