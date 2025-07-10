import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FiHome, FiUsers, FiDollarSign, FiUserPlus, FiBriefcase, FiBell, FiMenu, FiX, FiSun, FiMoon, FiLogOut } from "react-icons/fi";
import { LogoutModal } from "../components/UI components/app";
import type { Account, AccountState, State } from "../interface/interfaces";
import { useFetchGet } from "../components/hooks";
import { useAccount } from "../store/Account context";
import { useUI } from "../store/UIContext";
import { actions } from "../state/UI state";
import type { IconType } from "react-icons/lib";

interface NavigationItem {
  id: number,
  icon: IconType,
  state: State
}

const navigationItems: NavigationItem[] = [
  {
    id: 1, icon: FiHome, state: {
      name: "Home",
      path: '/'
    }
  },
  {
    id: 2, icon: FiUsers, state: {
      name: "Employee",
      path: '/employee'
    }
  },
  {
    id: 3, icon: FiDollarSign,
    state: {
      name: "Payroll",
      path: '/payroll'
    }
  },
  {
    id: 4, icon: FiDollarSign,
    state: {
      name: "Recruitment",
      path: '/payroll'
    }
  },
  {
    id: 5, icon: FiDollarSign,
    state: {
      name: "Department",
      path: '/payroll'
    }
  },
  {
    id: 6, icon: FiDollarSign,
    state: {
      name: "Statistic",
      path: '/payroll'
    }
  },
];

const DashboardLayout = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [account, dispatchAcc] = useAccount();
  const [currentSection, dispatchUI] = useUI();

  // console.log(account);
  const accountInfo = useFetchGet("employee", (account as AccountState).currentAccount.accountId);

  //
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handelLogout = () => {
    console.log("Logging out...")
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Updated: Mobile Menu Button with animation */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white transform hover:scale-110 transition-transform duration-200"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Updated: Sidebar with smooth transitions and hover effects */}
        <div
          className={`fixed lg:static lg:block w-64 h-screen transition-all duration-300 ease-in-out z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
        >
          <div className="h-full bg-white dark:bg-gray-800 shadow-lg">
            <div className="p-5 border-b dark:border-gray-700">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">HRM System</h1>
            </div>

            <nav className="p-4">
              {navigationItems.map((item) => (
                <Link to={item.state.path} key={item.id}>
                  <button
                    onClick={() => {
                      dispatchUI(actions.setUIState(item.state))
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-2 transition-all duration-200 transform hover:scale-105 
                      ${currentSection.currentState.name === item.state.name
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                  >
                    <item.icon size={20} />
                    <span>{item.state.name}</span>
                  </button>
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-8 left-16 space-x-4">
              <button
                onClick={() => setShowLogoutModal(true)}
                className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
              >
                <FiLogOut className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-30">
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
              <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="h-8 w-8 rounded-full ring-2 ring-blue-500"
                />
                <span className="hidden md:inline">{accountInfo?.lastName}</span>
              </div>
            </div>
          </header>

          <div className="container w-full p-4 md:p-6 animate-fadeIn">
            <Outlet />
          </div>
        </div>
      </div>
      {showLogoutModal && (
        <LogoutModal onShowLogoutModal={() => setShowLogoutModal(false)} onLogout={handelLogout} />
      )}
    </div>

  );
};

export default DashboardLayout;