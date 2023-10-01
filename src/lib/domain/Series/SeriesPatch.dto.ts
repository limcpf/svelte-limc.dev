import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class SeriesPatchDto extends BaseTimeDto{
    id: number
    site: string
    topic: string
    title: string

    constructor(
        id: number,
        site: string,
        topic: string,
        title: string,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt);
        this.id = id
        this.site = site
        this.topic = topic
        this.title = title
    }
}