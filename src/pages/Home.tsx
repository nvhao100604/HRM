import { useState } from "react";
import { Link } from "react-router-dom";


function Home() {
// const [currentSection, setCurrentSection] = useState("Home");
// const [isSidebarOpen, setSidebarOpen] = useState(false);
// const [isDarkMode, setIsDarkMode] = useState(false);

// const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
// const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div>
            <h1>Home</h1>
            <Link to={"/"}><button>Return</button></Link>

        </div>
    )
}

export default Home;