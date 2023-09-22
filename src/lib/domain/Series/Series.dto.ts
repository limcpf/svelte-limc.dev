import BaseTimeDto from "$lib/domain/BaseTimeDto";
import type TopicDto from "$lib/domain/Topic/Topic.dto";
import type SiteDto from "$lib/domain/Site/Site.dto";

export default class SeriesDto extends BaseTimeDto{
    id?: number
    topic: TopicDto
    site: SiteDto
    title: string

    constructor(
        topic: TopicDto,
        site: SiteDto,
        title: string,
        id?: number,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt);
        this.topic = topic
        this.site = site
        this.title = title
        if(id) this.id = id
    }
}