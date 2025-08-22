export interface Employee {
    [key: string]: string | number,
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: string,
    dateOfBirth: string,
    address: string,
    image: string,
    citizenIdentificationCard: string,
    status: string,
    roleId: number
}

export const defaultEmployee: Employee = {
    id: 0,
    firstName: '',
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    image: "",
    citizenIdentificationCard: "",
    status: "",
    roleId: 1
}

export interface EmployeeDataForm {
    [key: string]: string | number | File | null,
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: string,
    dateOfBirth: string | null,
    address: string,
    image: File | null,
    citizenIdentificationCard: string,
    status: string,
    roleId: number
}

export const employeeDefaultDataForm: EmployeeDataForm = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    dateOfBirth: null,
    address: "",
    image: null,
    citizenIdentificationCard: "",
    status: "",
    roleId: 1
}