import BaseTimeDto from "$lib/domain/BaseTimeDto";
import type SiteDto from "$lib/domain/Site/Site.dto";

export default class TopicDto extends BaseTimeDto{
    id?: number
    site: SiteDto
    name: string

    constructor(site: SiteDto, name: string, id?: number, createdAt?:string, updatedAt?:string) {
        super(createdAt, updatedAt)
        this.id = id || 0
        this.site = site
        this.name = name
    }
}