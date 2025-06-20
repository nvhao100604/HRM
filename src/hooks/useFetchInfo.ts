import { useEffect, useState } from "react";
import api from "../axios";
import type { Employee } from "../interface/employee.interface";

//input: id
const useFetchInfo = (id: string) => {
    const [data, setData] = useState<Employee | null>();
    useEffect(() =>{
        const fetchAPI = async () =>{
            try{
                const response = await api.get(`employee/${id}`);
                if(response.status == 500){
                    console.log(response.data.errors);
                }
                setData(response.data.data);
            }catch(err){
                setData(null);
            }
        }
        fetchAPI();
    }, [id]);

    return data;
}

export default useFetchInfo;
