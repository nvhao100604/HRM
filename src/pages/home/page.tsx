import { Link } from "react-router-dom";
import { useFetchAccount } from "../../store/Account context";
import { useEffect } from "react";

function Home() {

    const setState = () => {

    }
    return (
        <div>
            <h1>Home</h1>
            <p>{ }</p>
            <button onClick={setState}><Link to={"/employee"}>Return</Link></button>
        </div>
    )
}

export default Home;