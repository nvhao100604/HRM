import type { Dispatch } from "react"

export interface Account{
    accountId: string,
    roleId: string,
    departmentId: string
}

export interface AccountState {
    currentAccount: Account
}

export interface AccountAction {
    type: string,
    payload?: Account
}

export type AccountContextType = [AccountState, Dispatch<AccountAction>]