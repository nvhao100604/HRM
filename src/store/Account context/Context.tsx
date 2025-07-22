import { createContext } from "react";
import { init_account_state } from "./state/reducers";
import type { AccountContextType } from "../../interface/account/account.interface";

const Context = createContext<AccountContextType>([
    init_account_state,
    () => { }
])

export default Context;