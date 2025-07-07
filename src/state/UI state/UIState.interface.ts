export interface State{
    name: string,
    path: string
}

export interface UIState{
    states: State[],
    currentState: State
}

export interface UIAction {
    type: string,
    payload?: State
}
