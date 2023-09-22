import {LOCALE} from "$lib/constants/locale";

export default class BaseTimeEntity {
    createdAt: string
    updatedAt: string

    constructor(createdAtStr?: string, updatedAtStr?: string) {
        if(!createdAtStr || !updatedAtStr) { throw new Error("빈 값을 할당할 수 없습니다.") }
        const intl = new Intl.DateTimeFormat(LOCALE)
        this.createdAt = intl.format(new Date(createdAtStr))
        this.updatedAt = intl.format(new Date(updatedAtStr))
    }
}