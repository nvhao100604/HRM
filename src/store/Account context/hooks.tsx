import { useContext, useEffect, useRef } from "react"
import { AccountContext } from "."
import type { Account, AccountCache, AccountContextType, AccountState } from "../../interface/account/account.interface";
import { account_actions } from "./state";
import { api } from "../../config/axios";

const useAccount = (): AccountContextType => {
    const [account_state, dispatch] = useContext(AccountContext);

    return [account_state, dispatch];
}

const useFetchAccount = (): AccountContextType => {
    const [account_state, dispatch] = useAccount();
    const fetchedRef = useRef<boolean>(account_state.isLoggedIn);
    useEffect(() => {
        if (fetchedRef.current) {
            return;
        }

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
        fetch();
    }, [fetchedRef]);

    return [account_state, dispatch];
}
export { useAccount, useFetchAccount };