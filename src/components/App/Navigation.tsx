import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import type { State } from "../../interface/interfaces";
import { actions } from "../../store/UIContext/state";
import { useState } from "react";
import { useUI } from "../../store/UIContext";

const NavBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [section, dispatchUI] = useUI();
    const { states, currentState } = section;
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    return (
        <>
            <button
                className="lg:hidden fixed top-4 left-48 z-50 p-2 rounded-md bg-blue-600 text-white 
                transform hover:scale-110 transition-transform duration-200"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Updated: Sidebar with smooth transitions and hover effects */}
            <div
                className={`fixed lg:static lg:block w-64 h-screen transition-all duration-300 ease-in-out z-40 
                    ${isSidebarOpen ? "translate-x-0"
                        :
                        "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div className="h-full bg-white dark:bg-gray-800 shadow-lg">
                    <div className="p-5 border-b dark:border-gray-700">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">HRM System</h1>
                    </div>

                    <nav className="p-4">
                        {states.map((item: State) => (
                            <Link to={item.path} key={item.id}>
                                <button
                                    onClick={() => {
                                        dispatchUI(actions.setUIState(item))
                                    }
                                    }
                                    className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-2 transition-all duration-200 transform hover:scale-105 
                      ${currentState.name === item.name
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <item.icon size={20} />
                                    <span>{item.name}</span>
                                </button>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar;