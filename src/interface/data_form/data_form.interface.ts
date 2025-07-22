//Create account form
export interface IDataForm {
    username: string,
    password: string,
    confirmPassword: string,
    agreeToTerms: boolean
}

export const initDataForm: IDataForm = {
    username: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
}

export interface IError {
    username?: string,
    password?: string,
    confirmPassword?: string,
    agreeToTerms?: string
}
//Create account form

//Login form
export interface ILoginForm {
    username: string,
    password: string,
}

export const initLoginForm: ILoginForm = {
    username: "",
    password: "",
}
//Login form