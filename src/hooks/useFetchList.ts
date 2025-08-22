import useSWR from 'swr';
import { type Query } from "../interface/interfaces";
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
const useFetchList = (path: string, query: Query, config?: object) => {
    const handledQuery = handleQuery(query) ?? null;
    const queryString = new URLSearchParams(handledQuery as any).toString();
    const key = (path && query) ? `${path}/filter?${queryString}` : null

    const { data, error, isLoading } = useSWR(key, {
        suspense: true,
        keepPreviousData: true,
        fallbackData: [],
        dedupingInterval: 20000,
        ...config
    });

    // if (data && data.data) {
    //     console.log(data.data);
    // }

    return { data, error, isLoading };
}

export default useFetchList;
