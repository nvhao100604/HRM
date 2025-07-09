import { Link } from "react-router-dom";
import { useUI } from "../../store/UIContext";
import { actions } from "../../state/UI state";
import type { State } from "../../interface/interfaces";

function Home() {
    const [state, dispatch] = useUI();

    const setState = () => {
        const newState: State = {
            name: "Employee",
            path: "/employee"
        }
        dispatch(actions.setUIState(newState));
    }

    console.log("Current state: " + state.currentState.name);

    return (
        <div>
            <h1>Home</h1>
            <p>{ }</p>
            <button onClick={setState}><Link to={"/employee"}>Return</Link></button>
        </div>
    )
}

export default Home;