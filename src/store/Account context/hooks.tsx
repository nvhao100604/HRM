import { useContext, useEffect } from "react"
import { AccountContext } from "."
import type { AccountContextType, AccountState } from "../../interface/account.interface";
import { account_actions } from "./state";
import { api } from "../../config/axios";

const useAccount = (): AccountContextType => {
    const [account_state, dispatch] = useContext(AccountContext);

    return [account_state, dispatch];
}

const useFetchAccount = (): AccountState => {
    const [account_state, dispatch] = useAccount();

    useEffect(() => {
        const fetch = async () => {
            try {
                dispatch(account_actions.fetchAccountRequest());
                const response = await api.get("employee/20");
                const dataResponse = response.data;
                console.log("data" + JSON.stringify(dataResponse));
                if (dataResponse.success) {
                    dispatch(account_actions.fetchAccountSuccess(dataResponse));
                    console.log("current: " + JSON.stringify(account_state.currentAccount));
                }
            } catch (error) {
                dispatch(account_actions.fetchAccountError());
            }
        }
        fetch();
    }, []);

    return account_state;
}
export { useAccount, useFetchAccount };