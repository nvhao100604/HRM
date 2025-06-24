import { useEffect, useState } from "react";
import api from "../axios";
import type { Employee } from "../interface/employee.interface";
//input:
//+ Path: Thư mục tương ứng đối tượng cần lọc
//+ query: Các tiêu chỉ tìm kiếm phân trang
//+ dataPost: các thông tin được post lên

const useFetchList = (path: string, query: object, dataPost: object) => {
    const [data, setData] = useState<Employee[] | [] >([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            try{
                const queryString = new URLSearchParams(query as any).toString();
                console.log(queryString);
                const response = await api.post(`${path}/filter?${queryString}`, dataPost);
                setData(response.data.data);
            }catch(err){
                console.error(err);
                setData([]);
            }
        }
        fetchAPI();
    }, [path, JSON.stringify(query), JSON.stringify(dataPost)]);

    return data;
}

export default useFetchList;
