//UI State
import { RESET_UI_STATE, SET_UI_STATE } from "./constants";
import type { State, UIAction, UIState } from "./UIState.interface";

///Initial state for UI
const initUIState: UIState = {
    states: [],
    currentState: {
        name: "Home",
        path: "/"
    }
}
///Initial State
const initState: State = {
    name: "Home",
    path: "/"
};
//Reducer function
function reducer(state: UIState, action: UIAction){
    switch (action.type){
        case SET_UI_STATE:{
            if(!action.payload) return state;
            ///else
            const newState: State = action.payload
            return {
                ...state,
                currentState: newState
            };
        }
        case RESET_UI_STATE: {
            const resetState = initState;
            return {
                ...state,
                currentState: resetState
            };
        }

        default: throw new Error("Invalid action!")
    }
}

export { initUIState };
export default reducer;