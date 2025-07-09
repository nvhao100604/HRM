import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
        return usernameRegex.test(username);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const getPasswordStrength = (password) => {
        if (!password) return 0;
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        validateField(name, type === "checkbox" ? checked : value);
    };

    const validateField = (name, value) => {
        const newErrors = { ...errors };

        switch (name) {
            case "username":
                if (!validateUsername(value)) {
                    newErrors.username = "Username must be 4-20 characters long and can only contain letters, numbers, and underscores";
                } else {
                    delete newErrors.username;
                }
                break;
            case "password":
                if (!validatePassword(value)) {
                    newErrors.password = "Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character";
                } else {
                    delete newErrors.password;
                }
                break;
            case "confirmPassword":
                if (value !== formData.password) {
                    newErrors.confirmPassword = "Passwords do not match";
                } else {
                    delete newErrors.confirmPassword;
                }
                break;
            case "agreeToTerms":
                if (!value) {
                    newErrors.agreeToTerms = "You must agree to the terms and conditions";
                } else {
                    delete newErrors.agreeToTerms;
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0 && formData.agreeToTerms) {
            setIsLoading(true);
            try {
                // Simulated API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log("Form submitted:", formData);
            } catch (error) {
                console.error("Submission error:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const strengthColor = [
        "bg-red-500",
        "bg-orange-500",
        "bg-yellow-500",
        "bg-blue-500",
        "bg-green-500"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
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

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className={`appearance-none relative block w-full px-3 py-2 border ${errors.username ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
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
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className={`appearance-none relative block w-full px-3 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
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
                            {formData.password && (
                                <div className="mt-2 space-y-1">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-2 w-full rounded-full ${index < getPasswordStrength(formData.password) ? strengthColor[index] : 'bg-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500">Password strength: {["Very Weak", "Weak", "Fair", "Good", "Strong"][getPasswordStrength(formData.password) - 1] || "None"}</p>
                                </div>
                            )}
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-600 animate-fade-in">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className={`appearance-none relative block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && (
                                <p className="mt-2 text-sm text-red-600 animate-fade-in">{errors.confirmPassword}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="agreeToTerms"
                            name="agreeToTerms"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
                            I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a>
                        </label>
                    </div>
                    {errors.agreeToTerms && (
                        <p className="text-sm text-red-600 animate-fade-in">{errors.agreeToTerms}</p>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={Object.keys(errors).length > 0 || !formData.agreeToTerms || isLoading}
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isLoading || Object.keys(errors).length > 0 || !formData.agreeToTerms ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : "Create Account"}
                        </button>
                    </div>

                    <div className="text-center">
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot your password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;