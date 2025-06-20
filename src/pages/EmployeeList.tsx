import React, { useEffect, useState } from 'react'
import useFetchList from '../hooks/useFetchList';
import type { Employee } from '../interface/employee.interface';
import api from '../axios';

const EmployeeList = () => {

// const [employees, setEmployees] = useState<Employee[] | null | undefined>([]);
// let data: Employee[] | null | undefined = useFetchList();

const [data, setData] = useState<Employee[] | null | undefined>(null);
    useEffect(() =>{
        const fetchAPI = async () =>{
            try{
                const response = await api.post(`employee/filter?page=1&size=10`);
                if(response.status == 500){
                    console.log(response.data.errors);
                }
                setData(response.data.data);
            }catch(err){
                setData(null);
            }
        }
        fetchAPI();
    });

return (
    <>
    <div>
        <h1>EmployeeList</h1>
        <div>
            {data && data.map((item : Employee) =>(
                <div key={item.id}>
                    {item.id}
                </div>
            ))}
        </div>
    </div>
    </>
)
}

export default EmployeeList;