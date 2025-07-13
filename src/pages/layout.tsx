import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar } from "../components/UI components/app";
import { useFetchAccount } from "../store/Account context";

const DashboardLayout = () => {
  const current = useFetchAccount();

  useEffect(() => {
    console.log(JSON.stringify(current));
  }, [])

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-30">
            <Header />
          </div>
          <NavBar />

          <div className="container w-full p-4 md:p-6 animate-fadeIn">
            <Outlet />
          </div>
        </div>
      </div>

    </div>

  );
};

export default DashboardLayout;