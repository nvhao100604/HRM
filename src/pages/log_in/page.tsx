import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { initLoginForm, type Account, type IError, type ILoginForm } from "../../interface/interfaces";
import ReturnButton from "./ReturnButton";
import LoginButton from "./LoginButton";
import OtherLogin from "./OtherLogin";
import { authLogin, getCurrentEmployee } from "../../services";
import { useAccount } from "../../store/Account context";
import { account_actions } from "../../store/Account context/state";
import { useNotify } from "../../store/ToastifyContext";
import { NAVIGATE_DELAY, TOASTIFY_ERROR, TOASTIFY_SUCCESS } from "../../config/constants";
import axios from "axios";
import LoginField from "./LoginField";

const LoginForm = () => {
    const [formData, setFormData] = useState<ILoginForm>(initLoginForm);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<IError>({});
    const [state, dispatch] = useAccount();
    const notify = useNotify();
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

    const handleLoginResponse = async (response: any) => {
        if (response.success) {
            dispatch(account_actions.logIn(response.data as Account));
            notify.notify("Log in successfully!", TOASTIFY_SUCCESS);
            await new Promise(resolve => setTimeout(resolve, NAVIGATE_DELAY));
            dispatch(account_actions.fetchAccountSuccess());
            navigate('/');
        } else {
            dispatch(account_actions.fetchAccountError(response.message));
            notify.notify(response.message, TOASTIFY_ERROR);
        }
    }

    const handleError = (error: any | unknown) => {
        if (axios.isAxiosError(error)) {
            dispatch(account_actions.fetchAccountError(error.message));
            notify.notify(error.message, TOASTIFY_ERROR);
        }
    }

    const fetchLogin = async (response: any) => {
        if (response.success) {
            try {
                dispatch(account_actions.fetchAccountRequest());
                const employee_data = await getCurrentEmployee();
                await handleLoginResponse(employee_data);
            } catch (error) {
                handleError(error);
            }
        } else {
            dispatch(account_actions.fetchAccountError(response.message));
            notify.notify(response.message, TOASTIFY_ERROR);
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            try {
                dispatch(account_actions.fetchAccountRequest());
                const response = await authLogin(formData);
                dispatch(account_actions.fetchAccountSuccess());
                ///Login
                await fetchLogin(response);
            } catch (error) {
                handleError(error);
            }
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
                        <LoginField
                            formData={formData}
                            errors={errors}
                            showPassword={showPassword}
                            handleInputChange={handleInputChange}
                            setShowPassword={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div>
                        <LoginButton
                            errors={errors}
                        />
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