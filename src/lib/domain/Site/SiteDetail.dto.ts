import BaseTimeDto from "$lib/domain/BaseTimeDto";
import SiteDto from "$lib/domain/Site/Site.dto";

export default class SiteDetailDto extends BaseTimeDto {
    name: string
    topicCnt: number
    seriesCnt: number
    postCnt: number

    toSiteDto() {
        return new SiteDto(this.name, this.createdAt, this.updatedAt)
    }

    constructor(name: string, topicCnt: number, seriesCnt: number, postCnt: number, createdAt: string, updatedAt: string) {
        super(createdAt, updatedAt)
        this.name = name
        this.topicCnt = topicCnt
        this.seriesCnt = seriesCnt
        this.postCnt = postCnt
    }
}