import { useEffect, useState } from "react"
import { api, apiFile } from "../config/axios"
import { defaultEmployee, type Employee } from "../interface/interfaces"


const usePutData = (path: string, dataPut: employeeDataPost) => {
    const [data, setData] = useState<Employee>(defaultEmployee);

    useEffect(() => {
        const FetchAPI = async () => {
            try {
                const response = await apiFile.put(path, dataPut);
                const data = response.data.data;

                setData(data);
            } catch (error) {
                return null;
            }
        }
        FetchAPI();
    }, [dataPut]);

    return data;
}

export default usePutData;