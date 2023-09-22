import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class PostDto extends BaseTimeDto{
    id?: number
    title: string
    content: string
    summary: string
    site: string
    topic: number
    topicName: string
    series?: number
    seriesName?: string
    isPublished: Boolean
    
    constructor(
         title: string,
         content: string,
         summary: string,
         site: string,
         topic: number,
         topicName: string,
         isPublished: Boolean,
         id?: number,
         series?: number,
         seriesName?: string,
         createdAt?:string,
         updatedAt?:string
    ) {
        super(createdAt, updatedAt)
        this.id = id
        this.title = title
        this.content = content
        this.summary = summary
        this.site = site
        this.topic = topic
        this.topicName = topicName
        this.series = series
        this.seriesName = seriesName
        this.isPublished = isPublished
    }
}