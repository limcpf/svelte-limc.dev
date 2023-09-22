import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class SeriesListDto extends BaseTimeDto{
    id: number
    site: string
    topic: number
    topicName: string
    title: string

    constructor(
        id: number,
        site: string,
        topic: number,
        topicName: string,
        title: string,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt);
        this.id = id
        this.site = site
        this.topic = topic
        this.topicName = topicName
        this.title = title
    }
}