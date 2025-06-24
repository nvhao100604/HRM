import { useState } from "react"

const useDataPost = (initialData: object) =>{
    const [data, setData] = useState(initialData);

    const updateDataPost = (newData: object) =>{
        setData((prev) => ({
            ...prev,
            ...newData
        }));
    };

    const resetDataPost = () => {
        setData(initialData);
    }

    return [data, updateDataPost, resetDataPost];
}

export default useDataPost;