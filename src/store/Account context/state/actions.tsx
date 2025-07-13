import type { Account, AccountAction } from "../../../interface/account.interface";
import { FETCH_ACCOUNT_ERROR, FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, LOG_IN, LOG_OUT } from "./constants";

const logIn = (payload: Account): AccountAction => ({
    type: LOG_IN,
    payload
})

const logOut = (): AccountAction => ({
    type: LOG_OUT
})

const fetchAccountRequest = (): AccountAction => ({
    type: FETCH_ACCOUNT_REQUEST
})

const fetchAccountSuccess = (payload: Account): AccountAction => ({
    type: FETCH_ACCOUNT_SUCCESS,
    payload
})

const fetchAccountError = (): AccountAction => ({
    type: FETCH_ACCOUNT_ERROR
})

export { logIn, logOut, fetchAccountRequest, fetchAccountSuccess, fetchAccountError };