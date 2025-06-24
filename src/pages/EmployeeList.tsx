import useFetchList from '../hooks/useFetchList';
import type { Employee } from '../interface/employee.interface';
import { Button, TextField } from '@mui/material';
import useQuery from './../hooks/useQuery';
import useDataPost from '../hooks/useDataPost';
import type { Page } from '../interface/Page.interface';
import '../css/listStyle.css'

interface employeeDataPost {
    name: string,
    email: string,
    gender: string,
    address: string,
    status: string
};

const gender = [
    { label: "Male", value: "Male"},
    { label: "Female", value: "Female"},
    { label: "Other", value: "Other"},
    { label: "All", value: ""},
];
const EmployeeList = () => {

const [query, updateQuery, resetQuery ] = useQuery({
    page: 0,
    size: 10
});

const [dataPost, updateDataPost, resetDataPost] = useDataPost({
"name": '',
"email": '',
"gender": '',
"address": '',
"status": ''
});

const path: string = "employee";
const data: Employee[] | null | undefined = useFetchList(path, (query as Page), dataPost);

const SetPage = (newPage: number) =>{
    if(typeof updateQuery === 'function' && typeof resetQuery === 'function'){
        updateQuery({ page: newPage});
    }
}

const setGender = (newGender: string) => {
    if(typeof updateDataPost === 'function' && typeof resetQuery === 'function'){
        updateDataPost({ gender: newGender});
        resetQuery();
    }
}

const setName = (newName : string) => {
    if(typeof updateDataPost === 'function' && typeof resetQuery === 'function'){
        updateDataPost({ name: newName});
        resetQuery();
    }
}

const setEmail = (newEmail : string) =>{
    if(typeof updateDataPost === 'function' && typeof resetQuery === 'function'){
        updateDataPost({ email: newEmail});
        resetQuery();
    }
}

const setAddress = (newAddress : string) =>{
    if(typeof updateDataPost === 'function' && typeof resetQuery === 'function'){
        updateDataPost({ address: newAddress});
        resetQuery();
    }
}

const printId = (id: number) =>{
    console.log(id);
}


return (
    <>
    <div>
        <h1>EmployeeList</h1>
        <div>
            <TextField value={(dataPost as employeeDataPost).name} label="Name" placeholder='Name...'
            onChange={(e) => setName(e.target.value)}/>
            <TextField value={(dataPost as employeeDataPost).email} label="Email" placeholder='Email...'
            onChange={(e) => setEmail(e.target.value)}/>
            <TextField value={(dataPost as employeeDataPost).address} label="Address" placeholder='Address...'
            onChange={(e) => setAddress(e.target.value)}/><br/>
            Gender<div>
            {gender && gender.map(gen => (
                <button
                key={gen.value}
                style={(dataPost as employeeDataPost).gender === gen.value? {backgroundColor: "black", color: "white"} : {}}
                onClick={() => setGender(gen.value)}
                >{gen.label}</button>
            ))}
            </div>


        </div>
        <table style={{cursor:"pointer"}}>
            <thead>
                <tr style={{fontWeight: "Bold"}}>
                <th style={{width: "30%"}}>Full name</th>
                <th style={{width: "30%"}}>Email</th>
                <th style={{width: "30%"}}>Phone number</th>
            </tr>
            </thead>

            <tbody>
                {data && data.map((item : Employee) =>(
                <tr key={item.id} onClick={() => printId(item.id)}>
                    <td>{item.firstName} {item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
                ))}
            </tbody>
        </table>

        <div className="page-segmentation">
            <Button onClick={() => SetPage((query as Page).page - 1)}
            disabled={(query as Page).page ===0? true : false}>Previous</Button>
            <span>Page: {(query as Page).page + 1}</span>
            <Button onClick={() => SetPage((query as Page).page + 1)}>After</Button>
        </div>
    </div>
    </>
)
}

export default EmployeeList;