import { useEffect, useLayoutEffect, useState } from "react";
import { TempDataResponse, type DataResponse, type Query } from "../../interface/interfaces";
import { api } from './../../config/axios/index';

//input:
//+ Path: Thư mục tương ứng đối tượng cần lọc
//+ query: Các tiêu chỉ tìm kiếm phân trang
//+ dataPost: các thông tin được post lên

const handleQuery = (query: Query) => {
    const newQuery = query;
    Object.keys(newQuery).forEach(key => {
        const element = newQuery[key];
        if (element === '' || element === null || element === undefined) {
            delete newQuery[key];
        }
    })
    return newQuery;
}
const useFetchList = (path: string, query: Query) => {
    const [data, setData] = useState<DataResponse>(TempDataResponse);

    useLayoutEffect(() => {
        const fetchAPI = async () => {
            try {
                const handledQuery = handleQuery(query);
                const queryString = new URLSearchParams(handledQuery as any).toString();
                const response = await api.get(`${path}/filter?${queryString}`);
                setData({
                    data: response.data.data.content,
                    totalElements: response.data.data.totalElements,
                    totalPages: response.data.data.totalPages
                });
            } catch (err) {
                console.error(err);
                setData(TempDataResponse);
            }
        }
        fetchAPI();

        return () => {
            setData(TempDataResponse);
        }
    }, [path, JSON.stringify(query)]);

    return data;
}

export default useFetchList;
