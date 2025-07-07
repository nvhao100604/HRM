import { Link } from "react-router-dom";
import { useUI } from "../store/UIContext";


function Home() {
    const state = useUI();
    console.log(state);
    return (
        <div>
            <h1>Home</h1>
            <p>{}</p>
            <Link to={"/"}><button>Return</button></Link>
        </div>
    )
}

export default Home;