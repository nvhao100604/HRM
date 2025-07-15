import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { initLoginForm, type IError, type ILoginForm } from "../../interface/interfaces";
import { api } from "../../config/axios";

const LoginForm = () => {
    const [formData, setFormData] = useState<ILoginForm>(initLoginForm);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<IError>({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateUsername = (username: string) => {
        const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
        return usernameRegex.test(username);
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        const newErrors: IError = { ...errors };

        switch (name) {
            case "username":
                if (!validateUsername(value)) {
                    newErrors.username = "Username must be 4-20 characters long and can only contain letters, numbers, and underscores";
                } else {
                    delete newErrors.username;
                }
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            setIsLoading(true);
            try {
                const response = await api.post("accounts/sign-in", formData);
                const access_token = response.data.data.token;
                const refresh_token = response.data.data.refreshToken;
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("refresh_token", refresh_token);
            } catch (error) {
                console.error("Log in error:", error);
            } finally {
                const timerId = setTimeout(() => {
                    setIsLoading(false);
                    navigate('/');
                }, 3000);

                return () => {
                    clearTimeout(timerId);
                }
            }
        }
        else {
            console.log("Error");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                </div>

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

                <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
                    <div className="rounded-md shadow-sm space-y-4">
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
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-600 animate-fade-in">{errors.password}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={Object.keys(errors).length > 0 || isLoading}
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
                                ${isLoading || Object.keys(errors).length > 0 ?
                                    'bg-gray-400 cursor-not-allowed'
                                    :
                                    'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : "Log in"}
                        </button>
                    </div>

                    <div className="text-center">
                        <Link to={'/reset_password'}>Forgot your password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;