import { useContext, useEffect } from "react"
import { AccountContext } from "."
import type { Account, AccountContextType, AccountState } from "../../interface/account.interface";
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
                const response = await api.get("employee/current");
                const dataResponse = response.data;
                if (dataResponse.success) {
                    dispatch(account_actions.fetchAccountSuccess(dataResponse.data as Account));
                }
            } catch (error) {
                dispatch(account_actions.fetchAccountError());
            }
        }
        setTimeout(fetch, 5000);
    }, []);

    return account_state;
}
export { useAccount, useFetchAccount };