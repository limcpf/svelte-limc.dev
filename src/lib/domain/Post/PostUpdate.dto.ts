export default class PostUpdateDto {
     id?: number;
     title: string;
     summary: string;
     tableOfContents: string;
     content: string;
     siteName: string;
     topicId: number;
     seriesId?: number;
     isPublished: boolean;

    constructor(
        title: string,
        summary: string,
        tableOfContents: string,
        content: string,
        siteName: string,
        topicId: number,
        isPublished: boolean,
        id?: number,
        seriesId?: number
    ) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.tableOfContents = tableOfContents;
        this.content = content;
        this.siteName = siteName;
        this.topicId = topicId;
        this.seriesId = seriesId;
        this.isPublished = isPublished;
    }

}