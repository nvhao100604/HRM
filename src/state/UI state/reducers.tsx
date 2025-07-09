//UI State
import { RESET_UI_STATE, SET_UI_STATE } from "./constants";
import type { State, UIAction, UIState } from "../../interface/interfaces";

///Initial State
const initState: State = {
    name: "Home",
    path: "/"
};

///Initial UI state
const initUIState: UIState = {
    states: [],
    currentState: initState
}

//Reducer function
function reducer(state: UIState, action: UIAction){
    console.log("Previous state: " + state.currentState.name);
    switch (action.type){
        case SET_UI_STATE:{
            if(!action.payload) return state;
            ///else
            const newState: State = action.payload;
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

export { initUIState, initState };
export default reducer;