import { useEffect, useState } from "react";
import api from "../axios";
import type { Employee } from "../interface/employee.interface";

//input: id
const useFetchList = () => {
    const [data, setData] = useState<Employee[] | null | undefined>(null);
    useEffect(() =>{
        const fetchAPI = async () =>{
            try{
                const response = await api.post(`employee/filter?name=a`);
                if(response.status == 500){
                    console.log(response.data.errors);
                }
                setData(response.data.data);
            }catch(err){
                setData(null);
            }
        }
        fetchAPI();
    });

    return [data];
}

export default useFetchList;
