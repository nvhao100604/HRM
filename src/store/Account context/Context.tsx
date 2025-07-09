import { createContext } from "react";
import type { AccountContextType } from "../../interface/interfaces";
import { init_account_state } from "../../state/Account state";

const Context = createContext<AccountContextType>([
    init_account_state,
    () => {}
])

export default Context;