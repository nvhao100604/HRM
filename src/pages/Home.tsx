import { useState } from "react";
import { Link } from "react-router-dom";


function Home() {

    return (
        <div>
            <h1>Home</h1>
            <Link to={"/"}><button>Return</button></Link>

        </div>
    )
}

export default Home;