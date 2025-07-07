import { createContext, type Dispatch } from "react";
import { initUIState } from "../../state/UI state/reducers";
import type { UIAction, UIState } from "../../state/UI state/UIState.interface";

type UIContextType = [UIState, Dispatch<UIAction>];
///Dashboard state
const Context = createContext<UIContextType>([
    initUIState,
    () => {}
]);

export default Context;