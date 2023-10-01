import {LOCALE} from "$lib/constants/locale";

export function getVisibleDateTime(createdAt:string, updatedAt:string):string {
    const cDate = new Date(createdAt)

    let isUpdated = false;
    let standardDate = cDate.getTime() / 1000


    const diffTimeFromNow = (new Date().getTime() / 1000) - standardDate;

    if(diffTimeFromNow < 3600) return `${Math.floor(diffTimeFromNow / 60)}분 전`;
    else if(diffTimeFromNow < 43200) return `${Math.floor(diffTimeFromNow / 3600)}시간 전`;

    return new Intl.DateTimeFormat(LOCALE, {dateStyle: "short", timeStyle: "short"}).format(cDate);
}

export const getFormatDate = (date: string | undefined) => {
    if(!date) return "";
    return new Intl.DateTimeFormat("ko-KR", { dateStyle: 'long', timeStyle: 'medium' }).format(new Date(date));
};