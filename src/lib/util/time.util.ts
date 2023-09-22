import {MODIFICATION_DECISION_SECOND} from "$lib/constants/number";
import {LOCALE} from "$lib/constants/locale";

export function getVisibleDateTime(createdAt:string, updatedAt:string):string {
    const cDate = new Date(createdAt)
    const uDate = new Date(updatedAt)

    let isUpdated = false;
    let standardDate = cDate.getTime() / 1000
    const updateDate = uDate.getTime() / 1000

    if(updateDate - standardDate > MODIFICATION_DECISION_SECOND) {
        isUpdated = true;
        standardDate = updateDate
    }

    const diffTimeFromNow = (new Date().getTime()) - standardDate

    if(diffTimeFromNow < 600) return `${diffTimeFromNow / 60}분 전`;
    else if(diffTimeFromNow < 3600) return `${diffTimeFromNow / 600}분 전`
    else if(diffTimeFromNow < 43200) return `${diffTimeFromNow / 3600}시간 전`

    return new Intl.DateTimeFormat(LOCALE).format(
        isUpdated ? uDate : cDate
    );
}