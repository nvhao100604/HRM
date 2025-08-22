import { SESSION_ACCOUNT, SESSION_LOGGED_IN } from "../../../config/constants";
import { cloneAccount, type Account, type AccountAction, type AccountState } from "../../../interface/account/account.interface";
import { authLogout } from "../../../services";
import { FETCH_ACCOUNT_ERROR, FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, LOG_IN, LOG_OUT, UPDATE_ACCOUNT_INFO } from "./constants";

const store = (newAccountState: Account) => {
    sessionStorage.setItem(SESSION_ACCOUNT, JSON.stringify(newAccountState));
    sessionStorage.setItem(SESSION_LOGGED_IN, JSON.stringify(true));
}

const getCurrentAccount = (): Account => {
    const session_account = sessionStorage.getItem(SESSION_ACCOUNT);
    if (session_account === null) {
        return cloneAccount;
    }
    return JSON.parse(session_account as string);
};

const getIsLoggedIn = () => {
    const isLoggedIn = sessionStorage.getItem(SESSION_LOGGED_IN);
    if (!isLoggedIn) return false;

    return true;
}

const initial_account = getCurrentAccount();

const init_account_state: AccountState = {
    isLoading: false,
    currentAccount: initial_account,
    error: null,
    isLoggedIn: getIsLoggedIn()
}

const reducer = (state: AccountState, action: AccountAction) => {
    switch (action.type) {
        case LOG_IN: {
            const newAccountState = action.payload ?? initial_account;
            store(newAccountState);
            return {
                ...state,
                currentAccount: newAccountState,
                isLoggedIn: true
            }
        }
        case LOG_OUT: {
            authLogout();
            const resetState: Account = cloneAccount;
            return {
                ...state,
                currentAccount: resetState,
                isLoggedIn: false
            };
        };
        case FETCH_ACCOUNT_REQUEST: {
            // console.log("FETCH_ACCOUNT_REQUEST: ", action);
            return {
                ...state,
                isLoading: true,
                error: null,
                isLoggedIn: false
            }
        }
        case FETCH_ACCOUNT_SUCCESS: {
            // console.log("FETCH_ACCOUNT_SUCCESS: ", action);
            // console.log("FETCH_ACCOUNT_SUCCESS_PAYLOAD: ", action.payload);
            return {
                ...state,
                isLoading: false,
                error: null
            }
        }
        case FETCH_ACCOUNT_ERROR: {
            const error = action.payload ?? "Error Error!";
            return {
                ...state,
                isLoading: false,
                error: error
            }
        }
        case UPDATE_ACCOUNT_INFO: {
            const updatedAccount = action.payload ?? state.currentAccount;
            store(updatedAccount);
            return {
                ...state,
                currentAccount: updatedAccount
            }
        }
        default: throw new Error("Invalid action!");
    }
}

export { initial_account, init_account_state };
export default reducer;