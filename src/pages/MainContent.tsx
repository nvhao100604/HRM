import { useState } from "react";

const MainContent = () =>{

const [currentSection, setCurrentSection] = useState('');
return (
  <div className="p-4 md:p-6 animate-fadeIn">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{currentSection} Overview</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to the {currentSection} section of your HRM dashboard.
        </p>
      </div>
      <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Quick Stats</h2>
        <div className="text-gray-600 dark:text-gray-300">Statistics Dashboard</div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="text-gray-600 dark:text-gray-300">Latest Updates</div>
      </div>
    </div>
  </div>
);
};

export default MainContent;
