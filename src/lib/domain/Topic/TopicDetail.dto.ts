import BaseTimeDto from "$lib/domain/BaseTimeDto";
import type SiteDto from "$lib/domain/Site/Site.dto";

export default class TopicDetailDto extends BaseTimeDto {
    id: number
    name: string
    site: SiteDto
    seriesCnt: number
    postCnt: number

    constructor(
        id:number,
        name: string,
        site: SiteDto,
        seriesCnt: number,
        postCnt: number,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt)
        this.id = id
        this.name = name
        this.site = site
        this.seriesCnt = seriesCnt
        this.postCnt = postCnt
    }

}