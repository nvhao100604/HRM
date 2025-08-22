import { api } from "../../config/axios";
import { ACCESS_TOKEN, REFRESH_TOKEN, SESSION_ACCOUNT, SESSION_LOGGED_IN } from "../../config/constants";
import type { ILoginForm } from "../../interface/interfaces";
import { getCurrentEmployee } from "../employee/EmployeeService"

const authLogin = async (formData: ILoginForm, config?: object) => {
    const response = await api.post("accounts/sign-in", formData, config);
    if (response.data.success) {
        console.log(">>check response token: ", response)
        const access_token = response.data.data.token;
        const refresh_token = response.data.data.refreshToken;
        localStorage.setItem(ACCESS_TOKEN, access_token);
        localStorage.setItem(REFRESH_TOKEN, refresh_token);
    }
    return response.data;
}

const authLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    sessionStorage.removeItem(SESSION_ACCOUNT);
    sessionStorage.removeItem(SESSION_LOGGED_IN);
}

const getProfile = (config?: object) => {
    return getCurrentEmployee(config);
}

const createAccount = async (formData: object, config?: object) => {
    const response = await api.post("accounts", formData, config);

    return response.data;
}

const verify = async (verifyObject: object, config?: object) => {
    const response = await api.post("accounts/verify-otp", verifyObject, config);

    return response.data;
}

const resetPassword = async (resetObject: object, config?: object) => {
    const response = await api.post("accounts/reset-password", resetObject, config);

    return response.data;
}

const forgotPassword = async (forgotObject: object, config?: object) => {
    const response = await api.post("accounts/forgot-password", forgotObject, config);

    return response.data;
}

export {
    authLogin,
    authLogout,
    getProfile,
    createAccount,
    verify,
    resetPassword,
    forgotPassword
}