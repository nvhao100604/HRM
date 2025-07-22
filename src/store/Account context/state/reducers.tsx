import { cloneAccount, type Account, type AccountAction, type AccountState } from "../../../interface/account/account.interface";
import { FETCH_ACCOUNT_ERROR, FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, LOG_IN, LOG_OUT } from "./constants";

const initial_account: Account = cloneAccount;

const init_account_state: AccountState = {
    isLoading: false,
    currentAccount: initial_account,
    error: "",
    isLoggedIn: false
}

const reducer = (state: AccountState, action: AccountAction) => {
    switch (action.type) {
        case LOG_OUT: {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            const resetState: Account = initial_account;
            return {
                ...state,
                currentAccount: resetState,
                isLoggedIn: false
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
            console.log("FETCH_ACCOUNT_SUCCESS_PAYLOAD: ", action.payload);
            const newAccountState = action.payload ?? initial_account;
            return {
                ...state,
                isLoading: false,
                currentAccount: newAccountState,
                isLoggedIn: true
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