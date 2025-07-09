import type { Account, AccountAction, AccountState } from "../../interface/account.interface";
import { LOG_IN, LOG_OUT } from "./constants";

const logIn = (payload: Account): AccountAction => ({
    type: LOG_IN,
    payload
})

const logOut = (): AccountAction =>({
    type: LOG_OUT
})

export {logIn, logOut};