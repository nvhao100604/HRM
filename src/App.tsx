import { Employee } from "./components/Employee"
import { useState, type ChangeEvent, type ChangeEventHandler } from "react"
import { Button, TextField } from "@mui/material"


type Employee = { id: number; name: string}

function App() {

  const [employeeList, setEmployeeList] = useState<Employee[]>([])
  const [newEmployee, setNewEmployee] = useState('')

  const onNewEmployee = (e : ChangeEvent<HTMLInputElement>) =>{
    setNewEmployee(e.target.value)
  }

  const onAddEmployee = () =>{
    const id_temp = employeeList.length + 1
    const newEmployeeItem = {
      id: id_temp,
      name: newEmployee
    }

    setEmployeeList([newEmployeeItem, ...employeeList])
    setNewEmployee('')
  }
  return (
    <>
      <p>HRM Website</p>
      <div>
        <TextField size="small" value={newEmployee} onChange={onNewEmployee}/>
        <Button variant="contained" onClick={onAddEmployee}>Thêm</Button>
    </div>
      <h1>Danh sách nhân viên</h1>
      <div>
        {employeeList.map((em) =>{
          return <Employee name={em.name}/>
        })}
      </div>
    </>
  )
}

export default App
