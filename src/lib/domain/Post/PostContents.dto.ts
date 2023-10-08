export default class PostContentsDto {
    tableOfContent : string;
    content : string;

    constructor(tableOfContent:string, content:string) {
        this.tableOfContent = tableOfContent
        this.content = content
    }
}