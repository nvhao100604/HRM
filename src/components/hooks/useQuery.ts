import { useState } from 'react'

const useQuery = (initital: object) => {
    const [query, setQuery] = useState(initital);

    const updateQuery = (newQuery: object) =>{
        setQuery((prev: object) => ({
        ...prev,
        ...newQuery
        }));
    }

    const resetQuery = () =>{
        setQuery(initital);
    }
    return [query, updateQuery, resetQuery];
}

export default useQuery;