import { useContext, type Dispatch } from "react"
import type { UIAction, UIState } from "../../interface/interfaces";
import { UIContext } from '.';

const useUI = (): [UIState, Dispatch<UIAction>] =>{
    const [state, dispatch] = useContext(UIContext);

    return [state, dispatch];
}

export {useUI};