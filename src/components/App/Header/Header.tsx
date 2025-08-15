import { memo, useEffect, useRef, useState } from "react";
import LogoutModal from "./LogoutModal";
import { useAccount } from "../../../store/Account context";
import { account_actions } from "../../../store/Account context/state";
import Submenu from "./Submenu";
import Notification from "./Notification";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [account, dispatch] = useAccount();
    const currentAccount = account.currentAccount;
    const submenuRef = useRef<HTMLDivElement>(null);
    console.log("mount")
    useEffect(() => {
        const handleCloseLogoutModal = (e: any) => {
            if (submenuRef.current && !submenuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleCloseLogoutModal);

        return () => {
            document.removeEventListener("mousedown", handleCloseLogoutModal);
        }
    }, [submenuRef]);

    const handelLogout = () => {
        console.log("Logging out...");
        dispatch(account_actions.logOut());
        setShowLogoutModal(false);
    }
    return (
        <>
            <header className="bg-white dark:bg-gray-800 shadow-md p-3 top-0 z-30 fixed w-full">
                <div className="flex place-items-center justify-end space-x-4">
                    {/* <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button> */}
                    <div className="flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 relative">
                        <Notification />
                    </div>
                    <div
                        className="flex w-36 rounded-3xl p-2 items-center space-x-2 place-content-between cursor-pointer 
                    hover:bg-gray-200 hover:text-blue-400 hover:opacity-80 transition-opacity duration-200"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <span className="hidden md:inline text-lg text-center text-shadow-lg">{currentAccount.lastName === "" ? "User" : currentAccount.lastName}</span>
                        <img
                            src={account.isLoggedIn ? account.currentAccount.image :
                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                            alt="User"
                            className="h-8 w-8 rounded-full ring-2 ring-blue-500"
                        />
                    </div>
                </div>

                {isMenuOpen && (
                    <div ref={submenuRef} className="absolute bg-gray-300 pd-4 right-4 rounded-md">
                        <Submenu
                            setShowLogoutModal={() => setShowLogoutModal(true)}
                            setIsMenuOpen={() => setIsMenuOpen(false)}
                            isLoggedIn={account.isLoggedIn}
                        />
                    </div>
                )}
            </header>
            {showLogoutModal && (
                <LogoutModal onShowLogoutModal={() => setShowLogoutModal(false)} onLogout={handelLogout} />
            )}
        </>
    )
}

export default memo(Header);