import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class SeriesDetailDto extends BaseTimeDto{
    id: number
    site: string
    topic: number
    topicName: string
    title: string
    postCnt: number

    constructor(
        id: number,
        site: string,
        topic: number,
        topicName: string,
        title: string,
        postCnt: number,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt);
        this.id = id
        this.site = site
        this.topic = topic
        this.topicName = topicName
        this.title = title
        this.postCnt = postCnt
    }
}