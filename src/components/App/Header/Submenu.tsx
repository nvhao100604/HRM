import { FaInfo } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Submenu = ({ setShowLogoutModal, setIsMenuOpen, isLoggedIn }
    :
    { setShowLogoutModal: () => void, setIsMenuOpen: () => void, isLoggedIn: boolean }) => {
    const navigate = useNavigate();

    return (
        <div className="inline-grid grid-cols-1 gap-4 p-2">
            {isLoggedIn ?
                <button
                    onClick={setShowLogoutModal}
                    className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
                >
                    <FiLogOut className="mr-2" />
                    Logout
                </button>
                :
                <button
                    onClick={() => navigate("/login")}
                    className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
                >
                    <FiLogIn className="mr-2" />
                    Login
                </button>
            }
            <button
                className="inline-flex items-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition duration-200"
            >
                <FaInfo className="rounded-3xl bg-white p-1 text-gray-500 text-lg mr-2" />
                Information
            </button>
            {/* <button
                className="text-white right-0"
                onClick={setIsMenuOpen}
            >
                <FiX />
            </button> */}
        </div>
    )
}

export default Submenu;