import type { Account, AccountAction, AccountState } from "../../interface/interfaces";
import { LOG_IN, LOG_OUT } from "./constants";

const initial_account: Account = {
    accountId: "0",
    roleId: "0",
    departmentId: "0"
}

const init_account_state: AccountState = {
    currentAccount: initial_account
}

const reducer = (state: AccountState, action: AccountAction) => {
    switch (action.type){
        case LOG_IN: {
            const newState: Account = action.payload ?? initial_account;
            return {...state,
                    currentAccount: newState
            }
        };
        case LOG_OUT: {
            const resetState: Account = initial_account;
            return {...state,
                    currentAccount: resetState
            };
        };
        default: throw new Error("Invalid action!");
    }
}

export {initial_account, init_account_state};
export default reducer;