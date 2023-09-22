import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class SeriesLightDto extends BaseTimeDto{
    id: number
    title: string
    topic: number
    topicName: string

    constructor(
        id: number,
        title: string,
        topic: number,
        topicName: string,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt)
        this.id = id
        this.title = title
        this.topic = topic
        this.topicName = topicName
    }
}