import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa"

const OtherLogin = () => {
    return (
        <>
            <div className="flex justify-center space-x-4">
                <button className="flex items-center justify-center p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                    <FaGoogle className="text-red-500" />
                </button>
                <button className="flex items-center justify-center p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                    <FaFacebook className="text-blue-600" />
                </button>
                <button className="flex items-center justify-center p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                    <FaGithub className="text-gray-800" />
                </button>
            </div>

            <div className="flex items-center justify-center">
                <span className="bg-gray-300 h-px w-full"></span>
                <span className="px-4 text-gray-500 text-sm">or</span>
                <span className="bg-gray-300 h-px w-full"></span>
            </div>
        </>
    )
}

export default OtherLogin;