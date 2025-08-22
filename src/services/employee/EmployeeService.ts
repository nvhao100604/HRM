import { api, apiFile } from "../../config/axios";
import { EMPLOYEE, EMPLOYEE_CHECK_EXIST, EMPLOYEE_GET_CURRENT } from "../../config/constants";
import { useFetchById, useFetchList, useGetData } from "../../hooks";
import type { EmployeeDataForm, Query } from "../../interface/interfaces";

const getEmployeeFilter = (query: Query, config?: object) => {
    const { data, error, isLoading } = useFetchList(EMPLOYEE, query, config);

    return { data, error, isLoading };
}

const getEmployeeByID = (employeeID: number, config?: object) => {
    const { data, error, isLoading } = useFetchById(EMPLOYEE, employeeID, config);

    return { data, error, isLoading };
}

const getCurrentEmployee = async (config?: object) => {
    const response = await api.get(`${EMPLOYEE}/${EMPLOYEE_GET_CURRENT}`, config);
    console.log("check url: ", `${EMPLOYEE}/${EMPLOYEE_GET_CURRENT}`);

    return response.data;
}

const getCurrentEmployeeSWR = (config?: object) => {
    const { data, error, isLoading } = useGetData(`${EMPLOYEE}/${EMPLOYEE_GET_CURRENT}`, config);

    return { data, error, isLoading };
}

const createEmployee = async (formData: EmployeeDataForm, config?: object) => {
    const response = await apiFile.post(EMPLOYEE, formData, config);

    return response.data;
}

const updateEmployee = async (formData: EmployeeDataForm, config?: object) => {
    const response = await apiFile.put(EMPLOYEE, formData, config);

    return response.data;
}

const deleteEmployee = async (employeeID: number, config?: object) => {
    const response = await api.delete(`${EMPLOYEE}/${employeeID}`, config);

    return response.data;
}

const checkEmployeeExisted = (employeeID: number, config?: object) => {
    const { data, error, isLoading } = useFetchById(`${EMPLOYEE}/${EMPLOYEE_CHECK_EXIST}`, employeeID, config);

    return { data, error, isLoading };
}

export {
    getEmployeeFilter,
    getEmployeeByID,
    getCurrentEmployee,
    getCurrentEmployeeSWR,
    updateEmployee,
    createEmployee,
    deleteEmployee,
    checkEmployeeExisted,
}