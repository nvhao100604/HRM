import { useEffect, useLayoutEffect, useState } from "react";
import api from "../../config/axios";
import { TempDataResponse, type DataResponse } from "../../interface/interfaces";

//input:
//+ Path: Thư mục tương ứng đối tượng cần lọc
//+ query: Các tiêu chỉ tìm kiếm phân trang
//+ dataPost: các thông tin được post lên

const useFetchList = (path: string, query: object, dataPost: object) => {
    const [data, setData] = useState<DataResponse>(TempDataResponse);

    useLayoutEffect(() =>{
        const fetchAPI = async () =>{
            try{
                const queryString = new URLSearchParams(query as any).toString();
                console.log(queryString);
                const response = await api.post(`${path}/filter?${queryString}`, dataPost);
                setData({
                    data: response.data.data.content,
                    totalElements: response.data.data.totalElements,
                    totalPages: response.data.data.totalPages
                });
            }catch(err){
                console.error(err);
                setData(TempDataResponse);
            }
        }
        fetchAPI();

        return () => {
            setData(TempDataResponse);
        }
    }, [path, JSON.stringify(query), JSON.stringify(dataPost)]);

    return data;
}

export default useFetchList;
