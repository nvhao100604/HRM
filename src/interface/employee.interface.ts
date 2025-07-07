export interface Employee{
    [key: string ]: string,
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: string,
    dateOfBirth: string,
    address: string,
    position: string,
    image: string,
    citizenIdentificationCard: string,
    status: string
}

export const defaultEmployee: Employee = {
    id: '0',
    firstName: '',
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    position: "",
    image: "",
    citizenIdentificationCard: "",
    status: ""
}

export interface EmployeeDataForm {
    [key: string ]: string | File | null,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: string,
    dateOfBirth: string,
    address: string,
    image: File | null,
    citizenIdentificationCard: string,
    status: string
}

export const employeeDefaultDataForm: EmployeeDataForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    image: null,
    citizenIdentificationCard: "",
    status: ""
}