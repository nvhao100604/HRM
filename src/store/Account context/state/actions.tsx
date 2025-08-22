import type { Account, AccountAction } from "../../../interface/account/account.interface";
import { FETCH_ACCOUNT_ERROR, FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, LOG_IN, LOG_OUT, UPDATE_ACCOUNT_INFO } from "./constants";

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

const fetchAccountSuccess = (): AccountAction => ({
    type: FETCH_ACCOUNT_SUCCESS
})

const fetchAccountError = (payload: any): AccountAction => ({
    type: FETCH_ACCOUNT_ERROR,
    payload
})

const updateAccountInfo = (payload: Account): AccountAction => ({
    type: UPDATE_ACCOUNT_INFO,
    payload
})

export {
    logIn,
    logOut,
    fetchAccountRequest,
    fetchAccountSuccess,
    fetchAccountError,
    updateAccountInfo
};