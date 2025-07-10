import type { Dispatch } from "react";
import type { IconType } from "react-icons/lib";

export interface State {
    id: number,
    icon: IconType,
    name: string,
    path: string
}

export interface UIState {
    states: State[],
    currentState: State,
    previousState: State
}

export interface UIAction {
    type: string,
    payload?: State
}

export type UIContextType = [UIState, Dispatch<UIAction>];

