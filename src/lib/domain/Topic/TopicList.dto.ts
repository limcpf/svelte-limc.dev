import BaseTimeDto from "$lib/domain/BaseTimeDto";

export default class TopicListDto extends BaseTimeDto{
    id: number
    name: string
    site: string
    
    constructor(
        id:number,
        name: string,
        site: string,
        createdAt?:string,
        updatedAt?:string
    ) {
        super(createdAt, updatedAt)
        this.id = id
        this.name = name
        this.site = site
    }
}