//Data Get
export interface Page {
    page: number,
    size: number
}

export const defaultPage = {
    page: 0,
    size: 10
}
//Data Get

//DataPost
export interface employeeDataPost {
    name: string,
    email: string,
    gender: string,
    address: string,
    status: string
};
//DataPost

//DataResponse
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
//DataResponse

