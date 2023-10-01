import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class TopicDto extends BaseTimeDto{
    id?: number
    site: string
    name: string

    constructor(site: string, name: string, id?: number, createdAt?:string, updatedAt?:string) {
        super(createdAt, updatedAt)
        this.id = id || 0
        this.site = site
        this.name = name
    }
}