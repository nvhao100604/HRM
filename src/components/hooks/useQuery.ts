import { useState } from 'react'
import type { Query } from '../../interface/fetch_data.interface';

const useQuery = (initital: Query): [Query, (newQuery: Query) => void, () => void] => {
    const [query, setQuery] = useState(initital);

    const updateQuery = (newQuery: Query) => {
        setQuery((prev: Query) => ({
            ...prev,
            ...newQuery
        }));
    }

    const resetQuery = () => {
        setQuery(initital);
    }
    return [query, updateQuery, resetQuery];
}

export default useQuery;