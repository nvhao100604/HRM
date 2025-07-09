import { useReducer, type ReactElement } from "react"
import reducer, { init_account_state } from "../../state/Account state/reducers"
import Context from "./Context";

const Provider = ({children} : {children: ReactElement}) =>{
    const [account_state, dispatch] = useReducer(reducer, init_account_state);

    return (
        <Context.Provider value={[account_state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;