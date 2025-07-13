import type { Dispatch } from "react"

export interface Account {
    accountId: string,
    roleName: string,
    departmentId: string
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