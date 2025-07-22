import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { initLoginForm, type IError, type ILoginForm } from "../../interface/interfaces";
import { api } from "../../config/axios";
import ReturnButton from "./ReturnButton";
import LoginButton from "./LoginButton";
import OtherLogin from "./OtherLogin";

const LoginForm = () => {
    const [formData, setFormData] = useState<ILoginForm>(initLoginForm);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<IError>({});
    const [isLoading, setIsLoading] = useState(false);

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
                if (response.data.success) {
                    const access_token = response.data.data.token;
                    const refresh_token = response.data.data.refreshToken;
                    localStorage.setItem("access_token", access_token);
                    localStorage.setItem("refresh_token", refresh_token);
                } else {
                    alert("Username or password is incorrect!");
                }
            } catch (error) {
                console.error("Log in error:", error);
            }
        }
        else {
            console.log("Error");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <ReturnButton />
                <div>
                    <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <OtherLogin />
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
                        <LoginButton isLoading={isLoading} errors={errors} setIsLoading={() => setIsLoading(false)} />
                    </div>

                    <div className="text-center hover:text-blue-400">
                        <Link to={'/reset_password'}>Forgot your password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;