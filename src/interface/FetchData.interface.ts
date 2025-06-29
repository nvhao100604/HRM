import { data } from "react-router-dom"

export interface Page {
    page: number,
    size: number
}

export const defaultPage = {
    page: 0,
    size: 10
}

export interface DataResponse {
    data: any[],
    totalElements: number,
    totalPages: number
}

export const TempDataResponse = {
    data: [],
    totalElements: 0,
    totalPages: 0
}
