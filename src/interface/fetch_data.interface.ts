//Data Get
export interface Query {
    [key: string]: string | number | undefined,
    page?: number,
    size?: number,
    name?: string,
    email?: string,
    gender?: string,
    address?: string,
    status?: string,
    roleId?: string,
    departmentId?: string
}

export const defaultQuery: Query = {
    page: 0,
    size: 10,
    name: "",
    email: "",
    gender: "",
    address: "",
    status: "",
    roleId: "",
    departmentId: "",
}
//Data Get

//DataPost

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

