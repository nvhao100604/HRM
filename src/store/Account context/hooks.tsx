import { useContext, useEffect } from "react"
import { AccountContext } from "."
import type { AccountContextType } from "../../interface/account/account.interface";

const useAccount = (): AccountContextType => {
    const [account_state, dispatch] = useContext(AccountContext);

    return [account_state, dispatch];
}

export { useAccount };