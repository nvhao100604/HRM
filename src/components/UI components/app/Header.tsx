import { FiBell } from "react-icons/fi";

const Header = () => {
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
                <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User"
                        className="h-8 w-8 rounded-full ring-2 ring-blue-500"
                    />
                    <span className="hidden md:inline">{ }</span>
                </div>
            </div>
        </header>
    )
}

export default Header;