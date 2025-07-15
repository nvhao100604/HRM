import type { Dispatch } from "react"

export interface Account {
    id?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string,
    gender?: string,
    dateOfBirth?: string,
    address?: string,
    image?: string,
    status?: string,
    citizenIdentificationCard?: string,
    roleId?: number,
    roleName?: string,
    departmentId?: number,
    departmentName?: string,
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
    status: "",
    citizenIdentificationCard: "",
    roleId: 0,
    roleName: "",
    departmentId: 0,
    departmentName: "",
}
export interface AccountState {
    isLoading: boolean,
    currentAccount: Account,
    error: string
}

export interface AccountAction {
    type: string,
    payload?: Account
}

export type AccountContextType = [AccountState, Dispatch<AccountAction>]