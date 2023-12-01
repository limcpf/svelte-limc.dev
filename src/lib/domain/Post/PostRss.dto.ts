export default class PostRssDto {
    title : string;
    summary : string;
    createdAt : Date;

    constructor(title: string, summary: string, createdAt: Date) {
        this.title = title
        this.summary = summary
        this.createdAt = createdAt
    }
}