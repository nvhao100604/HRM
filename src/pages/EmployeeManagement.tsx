// import { EmployeeList } from "../components/EmployeeList"
import { useState, type ChangeEvent} from "react"
import { Button, TextField } from "@mui/material"
import useFetchInfo from "../hooks/useFetchInfo";
import type { Employee } from "../interface/employee.interface";

function EmployeeManagement() {
//Hàm trả về employee thông qua id
const [tempEmployeeId, setEmployeeId] = useState<string>('');

const setID = (employeeId: string) =>{
    console.log("eee:" + employeeId);
    setEmployeeId(employeeId);
}

const EmployeeFilter = () =>{
    if(data != null){
        console.log(data)
    }
}

const data: Employee | null | undefined = useFetchInfo(tempEmployeeId);
let employee : Employee | null | undefined;

if(data != null){
    employee = data;
}

return (
    <>
    <p>HRM Website</p>
    <div>
    {/* <TextField size="small" value={tempEmployeeId} onChange={onFilterEmployee}/> */}
    <input type="number" value={tempEmployeeId} onChange={(e) => setID(e.target.value)}/>
    <Button variant="contained" onClick={EmployeeFilter}>Filter</Button>
</div>
    <h1>Nhân viên: </h1>
    <div key={employee?.id}>
        <p>Họ tên: {employee?.lastName} {employee?.firstName}</p>
        <p>Email: {employee?.email}</p>
        <p>Phone: {employee?.phone}</p>
        <p>Position: {employee?.position}</p>
        <p>Gender: {employee?.gender}</p>
        <p>Date of birth: {employee?.dateOfBirth}</p>
        <p>Address: {employee?.address}</p>
        <p>Citizen Identification Card : {employee?.citizenIdentificationCard}</p>
        <p>Status: {employee?.status}</p>
        <img src={employee?.image} alt="" />
    </div>
    </>
)
}

export default EmployeeManagement
