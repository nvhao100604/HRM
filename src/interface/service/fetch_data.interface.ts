import { DEFAULT_PAGE, DEFAULT_SIZE } from "../../config/constants"

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
    page: DEFAULT_PAGE,
    size: DEFAULT_SIZE,
    name: "",
    email: "",
    gender: "",
    address: "",
    status: "",
    roleId: "",
    departmentId: "",
}
//Data Get

//DataResponse
export interface IDataResponse {
    success: boolean,
    message: string,
    data: any[] | object,
    errors: any[],
    timestamp: string,
    path: string
}
//DataResponse

