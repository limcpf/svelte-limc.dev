import BaseTimeEntity from "$lib/domain/BaseTimeEntity";
import type SiteDto from "$lib/domain/Site/Site.dto";

export default class Site extends BaseTimeEntity {
    name: string

    constructor(dto: SiteDto) {
        super(dto.createdAt, dto.updatedAt)
        this.name = dto.name
    }
}