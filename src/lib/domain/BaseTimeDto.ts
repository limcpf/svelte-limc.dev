export default class BaseTimeDto {
    createdAt?: string
    updatedAt?: string

    constructor(createdAt?: string, updatedAt?: string) {
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}