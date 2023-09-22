import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class SiteDto extends BaseTimeDto {
    name: string

    constructor(name: string, createdAt?: string, updatedAt?: string) {
        super(createdAt, updatedAt)
        this.name = name
    }
}