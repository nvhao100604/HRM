import { FaEye, FaEyeSlash } from "react-icons/fa";
import type { IError, ILoginForm } from "../../interface/interfaces";

const LoginField = ({ errors, formData, handleInputChange, showPassword, setShowPassword }:
    {
        errors: IError,
        formData: ILoginForm,
        handleInputChange: (e: any) => void,
        showPassword: boolean,
        setShowPassword: () => void
    }) => {
    return (
        <>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className={`appearance-none relative block w-full px-3 py-2 border 
                                    ${errors.username ? 'border-red-300' : 'border-gray-300'} 
                                    placeholder-gray-500 text-gray-900 rounded-md
                                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                    value={formData.username}
                    onChange={handleInputChange}
                />
                {errors.username && (
                    <p className="mt-2 text-sm text-red-600 animate-fade-in">{errors.username}</p>
                )}
            </div>

            <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        type={showPassword ? "text" : "password"}
                        required
                        className={`appearance-none relative block w-full px-3 py-2 border 
                                        ${errors.password ? 'border-red-300' : 'border-gray-300'} 
                                        placeholder-gray-500 text-gray-900 rounded-md 
                                        focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={setShowPassword}
                    >
                        {showPassword ? <FaEyeSlash className="text-gray-400" />
                            :
                            <FaEye className="text-gray-400" />}
                    </button>
                </div>
                {errors.password && (
                    <p className="mt-2 text-sm text-red-600 animate-fade-in">{errors.password}</p>
                )}
            </div>
        </>
    )
}

export default LoginField;