import Site from "$lib/domain/Site/Site.class";
import BaseTimeEntity from "$lib/domain/BaseTimeEntity";
import type TopicDto from "$lib/domain/Topic/Topic.dto";
import {ErrorEnum} from "$lib/constants/error";

export default class Topic extends BaseTimeEntity{
    id: number
    name: string
    site: Site

    constructor(dto: TopicDto) {
        if(!dto.id) throw new Error(ErrorEnum.PK_IS_NOT_NULL)
        super(dto.createdAt, dto.updatedAt)
        this.id = dto.id
        this.name = dto.name
        this.site = new Site(dto.site)
    }
}