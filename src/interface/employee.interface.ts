export interface Employee{
    id: number,
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
    id: 0,
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