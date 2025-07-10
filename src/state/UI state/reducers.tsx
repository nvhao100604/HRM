//UI State
import { RESET_UI_STATE, SET_UI_STATE } from "./constants";
import type { State, UIAction, UIState } from "../../interface/interfaces";
import { FiArchive, FiBookmark, FiBriefcase, FiDollarSign, FiHexagon, FiHome, FiUsers } from "react-icons/fi";

const defaultState: State = {
    id: 0,
    icon: FiHome,
    name: "Home",
    path: '/'
}

const store = (currentState: State) => {
    const jsonString = JSON.stringify(currentState);
    sessionStorage.setItem('currentSection', jsonString);
}

const currentSection = (): State => {
    const storedSection = sessionStorage.getItem('currentSection');

    if (storedSection === null) {
        console.log(storedSection);
        store(defaultState);
        return defaultState;
    }

    return JSON.parse(storedSection as string);
};
///Initial State
const initState: State = currentSection();

///Initial UI state
const initUIState: UIState = {
    states: [{
        id: 1, icon: FiHome,
        name: "Home",
        path: '/'
    },
    {
        id: 2, icon: FiUsers,
        name: "Employee",
        path: '/employee'
    },
    {
        id: 3, icon: FiDollarSign,
        name: "Payroll",
        path: '/payroll'
    },
    {
        id: 4, icon: FiArchive,
        name: "Recruitment",
        path: '/recruitment'
    },
    {
        id: 5, icon: FiBriefcase,
        name: "Department",
        path: '/department'
    },
    {
        id: 6, icon: FiHexagon,
        name: "Statistic",
        path: '/statistic'

    },],
    currentState: initState,
    previousState: initState
}

//Reducer function
function reducer(state: UIState, action: UIAction) {
    console.log("Previous state: " + state.currentState.name);
    switch (action.type) {
        case SET_UI_STATE: {
            if (!action.payload) return state;
            ///else
            const newState: State = action.payload;
            store(newState);
            return {
                ...state,
                currentState: newState,
                previousSate: state.currentState
            };
        }
        case RESET_UI_STATE: {
            const resetState = initState;
            store(resetState);
            return {
                ...state,
                currentState: resetState,
                previousState: state.currentState
            };
        }

        default: throw new Error("Invalid action!")
    }
}

export { initUIState, initState };
export default reducer;