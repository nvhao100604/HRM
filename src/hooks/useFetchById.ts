import useSWR from "swr";

const useFetchById = (path: string, id: number | string, config?: object) => {
    const key = path ? `${path}/${id}` : null;
    const { data, error, isLoading } = useSWR(key, {
        ...config,
        suspense: true,
        keepPreviousData: true,
        fallbackData: {},
        dedupingInterval: 20000
    });

    return { data, error, isLoading };
}

export default useFetchById;