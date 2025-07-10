import { RESET_UI_STATE, SET_UI_STATE } from "./constants";
import type { State, UIAction } from "../../interface/UIState.interface";

const setUIState = (payload: State): UIAction => ({
    type: SET_UI_STATE,
    payload
})

const resetUIState = (): UIAction => ({
    type: RESET_UI_STATE
})

export { setUIState, resetUIState }