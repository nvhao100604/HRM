import { createContext } from "react";
import { initUIState } from "../../state/UI state/reducers";
import type { UIContextType } from "../../interface/UIState.interface";

///Dashboard state
const Context = createContext<UIContextType>([
    initUIState,
    () => { }
]);

export default Context;