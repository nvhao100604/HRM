import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar, PureLoading } from "../components/index";
import { useAccount, useFetchAccount } from "../store/Account context";
import { account_actions } from "../store/Account context/state";
import { api } from "../config/axios";
import type { Account } from "../interface/interfaces";

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [account_state, dispatch] = useAccount();
  const fetchedRef = useRef<Account>(account_state.currentAccount);
  useEffect(() => {
    if (fetchedRef.current.id != 0) {
      return;
    }

    const fetch = async () => {
      try {
        dispatch(account_actions.fetchAccountRequest());
        const response = await api.get("employee/current");
        const dataResponse = response.data;
        if (dataResponse.success) {
          dispatch(account_actions.fetchAccountSuccess(dataResponse.data as Account));
        }
      } catch (error) {
        dispatch(account_actions.fetchAccountError());
      }
    }
    fetch();
  }, [fetchedRef]);

  // if (account.isLoggedIn) {
  //   console.log(JSON.stringify(account.currentAccount));
  // }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timerId);
    }
  })
  return (
    <div className={`h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white h-[calc(100%_-_4rem)]">
        <NavBar />
        <Header />
        <div className="container p-4 animate-fadeIn ml-60 mt-14 h-full">
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