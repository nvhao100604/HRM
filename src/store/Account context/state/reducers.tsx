import type { Account, AccountAction, AccountState } from "../../../interface/account.interface";
import { FETCH_ACCOUNT_ERROR, FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, LOG_IN, LOG_OUT } from "./constants";

const initial_account: Account = {
    accountId: "775572003",
    roleName: "ADMIN",
    departmentId: "0"
}

const init_account_state: AccountState = {
    isLoading: false,
    currentAccount: initial_account,
    error: ""
}

const reducer = (state: AccountState, action: AccountAction) => {
    switch (action.type) {
        case LOG_IN: {
            const newState: Account = action.payload ?? initial_account;
            return {
                ...state,
                currentAccount: newState
            }
        };
        case LOG_OUT: {
            const resetState: Account = initial_account;
            return {
                ...state,
                currentAccount: resetState
            };
        };
        case FETCH_ACCOUNT_REQUEST: {
            console.log("FETCH_ACCOUNT_REQUEST: ", action);
            return {
                ...state,
                isLoading: true
            }
        }
        case FETCH_ACCOUNT_SUCCESS: {
            console.log("FETCH_ACCOUNT_SUCCESS: ", action);
            const newAccountState = action.payload ?? initial_account;
            return {
                ...state,
                isLoading: false,
                currentAccount: newAccountState
            }
        }
        case FETCH_ACCOUNT_ERROR: {
            console.log("FETCH_ACCOUNT_ERROR: ", action);
            return {
                ...state,
                isLoading: false,
                error: "Error Error"
            }
        }
        default: throw new Error("Invalid action!");
    }
}

export { initial_account, init_account_state };
export default reducer;