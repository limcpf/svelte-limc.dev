import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class SeriesPostDto extends BaseTimeDto{
    site: string
    topic: number
    title: string

    constructor(
        site: string,
        topic: number,
        title: string,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt);
        this.site = site
        this.topic = topic
        this.title = title
    }
}