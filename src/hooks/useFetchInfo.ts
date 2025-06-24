import { useEffect, useState } from "react";
import api from "../axios";
import type { Employee } from "../interface/employee.interface";

//input: id
const useFetchInfo = (path: string, id: string) => {
    const [data, setData] = useState<Employee | null>();
    useEffect(() =>{
        const fetchAPI = async () =>{
            try{
                const response = await api.get(`${path}/${id}`);
                setData(response.data.data);
            }catch(err){
                console.error(err);
                setData(null);
            }
        }
        fetchAPI();
    }, [path, id]);

    return data;
}

export default useFetchInfo;
