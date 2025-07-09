import React, { useState } from "react";
import { FiHome, FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

const ErrorPage = ({ errorCode = 404, errorMessage = "Oops! The page you're looking for couldn't be found" }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    window.location.reload();
  };

  const handleSetDefaultSection = () =>{
    const jsonString = JSON.stringify("Home");
    sessionStorage.setItem('currentSection', jsonString);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <div className="text-blue-600 font-bold text-9xl md:text-[180px] opacity-10 select-none">
            {errorCode}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Error {errorCode}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto">
                {errorMessage}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto p-8">
          <div className="animate-pulse">
            <div className="h-3 bg-blue-200 rounded-full w-3/4 mx-auto mb-4"></div>
            <div className="h-3 bg-blue-200 rounded-full w-1/2 mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 space-x-2"
          aria-label="Return to home page"
          onClick={handleSetDefaultSection}
          ><Link to={"/"}>
            <FiHome className="text-xl" />
            <span>Return Home</span>
          </Link>
          </button>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 space-x-2 disabled:opacity-50"
            aria-label="Refresh page"
          >
            <FiRefreshCw className={`text-xl ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh Page</span>
          </button>
        </div>

        <div className="text-gray-500 text-sm">
          <p>Need help? Contact our support team at</p>
          <a 
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline"
            aria-label="Email support"
          >
            support@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;