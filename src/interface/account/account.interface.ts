import type { Dispatch } from "react"

export interface AccountCache {
    [key: number]: Account;
}

export interface Account {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: string,
    dateOfBirth: string,
    address: string,
    image: string,
    citizenIdentificationCard: string,
    status: string,
    roleId: number,

    roleName: string,
    departmentId: number,
    departmentName: string,
}
export const cloneAccount: Account = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    image: "",
    citizenIdentificationCard: "",
    status: "",
    roleId: 0,

    roleName: "",
    departmentId: 0,
    departmentName: "",
}
export interface AccountState {
    isLoading: boolean,
    currentAccount: Account,
    error: any,
    isLoggedIn: boolean
}

export interface AccountAction {
    type: string,
    payload?: Account
}

export type AccountContextType = [AccountState, Dispatch<AccountAction>]