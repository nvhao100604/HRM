import useSWR from "swr";

const useGetData = (path: string, config?: object) => {
    const key = path ?? null;

    const { data, error, isLoading } = useSWR(key, {
        suspense: true,
        keepPreviousData: true,
        fallbackData: [],
        dedupingInterval: 20000,
        ...config
    })

    return { data, error, isLoading };
}

export default useGetData;