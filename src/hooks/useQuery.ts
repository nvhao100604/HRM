import { useState } from 'react'

const useQuery = (initital: object) => {
    const [query, setQuery] = useState(initital);

    const updateQuery = (newQuery: object) =>{
        if(typeof updateQuery === 'function'){
            setQuery((prev: object) => ({
            ...prev,
            ...newQuery
        }))};
    }

    const resetQuery = () =>{
        setQuery(initital);
    }
    return [query, updateQuery, resetQuery];
}

export default useQuery;