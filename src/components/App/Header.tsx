import { useState } from "react";
import { FiBell, FiLogIn, FiLogOut, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../App/LogoutModal";
import { useAccount } from "../../store/Account context";
import { account_actions } from "../../store/Account context/state";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [account, dispatch] = useAccount();
    const navigate = useNavigate();

    const handelLogout = () => {
        console.log("Logging out...");
        dispatch(account_actions.logOut());
        setShowLogoutModal(false);
    }
    return (
        <header>
            <div className="flex justify-end items-center space-x-4">
                {/* <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button> */}
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 relative">
                    <FiBell size={20} />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>
                <div
                    className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User"
                        className="h-8 w-8 rounded-full ring-2 ring-blue-500"
                    />
                    <span className="hidden md:inline">{ }</span>
                </div>
            </div>

            {isMenuOpen && (
                <div className="relative bg-gray-500 pd-4">
                    <button
                        onClick={() => navigate("/login")}
                        className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
                    >
                        <FiLogIn className="mr-2" />
                        Login
                    </button>
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
                    >
                        <FiLogOut className="mr-2" />
                        Logout
                    </button>
                    <button
                        className="text-white right-0"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FiX />
                    </button>
                </div>
            )}

            {showLogoutModal && (
                <LogoutModal onShowLogoutModal={() => setShowLogoutModal(false)} onLogout={handelLogout} />
            )}
        </header>
    )
}

export default Header;