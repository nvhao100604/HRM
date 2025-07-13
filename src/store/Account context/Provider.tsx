import { useReducer, type ReactElement } from "react"
import Context from "./Context";
import reducer, { init_account_state } from "./state/reducers";

const Provider = ({ children }: { children: ReactElement }) => {
    const [account_state, dispatch] = useReducer(reducer, init_account_state);

    return (
        <Context.Provider value={[account_state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;