export default class PostTitleDto {
    titleHash : number;
    title : string;
    summary : string;

    constructor(titleHash:number, title: string, summary: string) {
        this.titleHash = titleHash
        this.title = title
        this.summary = summary
    }
}