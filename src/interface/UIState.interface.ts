import type { Dispatch } from "react";

export interface State {
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

