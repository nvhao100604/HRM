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
    firstName: '123',
    lastName: "123",
    email: "123",
    phone: "123",
    gender: "123",
    dateOfBirth: "123",
    address: "123",
    position: "123",
    image: "123",
    citizenIdentificationCard: "123",
    status: "123"
}