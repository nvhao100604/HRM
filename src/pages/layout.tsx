import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar, PureLoading } from "../components/UI components/app";

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    }
  })
  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <NavBar />
        <div className="flex-1 justify-center">
          <div className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-30 max-h-16">
            <Header />
          </div>
          <div className="container w-full p-4 md:p-6 animate-fadeIn h-[calc(100%_-_4rem)]">
            {isLoading ?
              <div className="h-[calc(100%_-_4rem)] flex justify-center place-items-center">
                <PureLoading />
              </div>
              :
              <Outlet />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;