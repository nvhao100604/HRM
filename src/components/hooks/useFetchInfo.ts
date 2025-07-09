import { useEffect, useState } from "react";
import api from "../../config/axios";
import { defaultEmployee, type Employee } from "../../interface/interfaces";

//input: id
const useFetchInfo = (path: string, id: string) => {
    const [data, setData] = useState<Employee>();
    useEffect(() =>{
        const fetchAPI = async () =>{
            try{
                const response = await api.get(`${path}/${id}`);
                setData(response.data.data);
            }catch(err){
                console.error(err);
                setData(defaultEmployee);
            }
        }
        fetchAPI();

        return () =>{
            setData(defaultEmployee);
        }
    }, [path, id]);

    return data;
}

export default useFetchInfo;
