import type { Account, Employee, EmployeeDataForm } from "../../interface/interfaces";

const CreateFormByEmployee = (employee: Employee) => {
    const employeeForm: EmployeeDataForm = {
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        gender: employee.gender,
        phone: employee.phone,
        dateOfBirth: employee.dateOfBirth,
        citizenIdentificationCard: employee.citizenIdentificationCard,
        address: employee.address,
        status: employee.status,
        image: null,
        roleId: employee.roleId
    }

    return employeeForm;
}

const CreateFormByAccount = (account: Account) => {
    const employeeForm: EmployeeDataForm = {
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        gender: account.gender,
        phone: account.phone,
        dateOfBirth: account.dateOfBirth,
        citizenIdentificationCard: account.citizenIdentificationCard,
        address: account.address,
        status: account.status,
        image: null,
        roleId: account.roleId
    }

    return employeeForm;
}

export {
    CreateFormByEmployee,
    CreateFormByAccount
};