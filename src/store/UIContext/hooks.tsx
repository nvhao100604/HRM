import { useContext, type Dispatch } from "react"
import type { State, UIAction, UIState } from "../../interface/interfaces";
import { UIContext } from '.';

const useUI = (): [UIState, Dispatch<UIAction>] => {
    const [state, dispatch] = useContext(UIContext);

    return [state, dispatch];
}

const getCurrentUIState = (): State => {
    const [state, dispatch] = useContext(UIContext);
    const currentState = state.currentState;

    return currentState;
}
export { useUI, getCurrentUIState };