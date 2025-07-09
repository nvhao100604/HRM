import { useContext } from "react"
import { AccountContext } from "."

const useAccount = () =>{
    const [account_state, dispatch] = useContext(AccountContext);

    return [account_state, dispatch];
}

export {useAccount};