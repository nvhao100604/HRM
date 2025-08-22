import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar, PureLoading } from "../components/index";
import { useAccount } from "../store/Account context";
import ErrorPage from "./error/page";

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useAccount();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timerId);
    }
  }, []);


  if (state.isLoading) return <div>Loading...</div>

  if (state.error !== null) {
    // console.log(state.error)
    return <ErrorPage />
  }

  return (
    <div className={`h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white h-[calc(100%_-_4rem)]">
        <NavBar />
        <Header />
        <div className="container p-4 animate-fadeIn ml:10 lg:ml-60 mt-18 h-full">
          {isLoading ?
            <div className="h-full flex justify-center place-items-center m-auto">
              <PureLoading />
            </div>
            :
            <Outlet />
            // (
            //   !account.isLoggedIn ?
            //     <div>Please log in</div>
            //     :

            // )

          }
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;