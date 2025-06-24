import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import EmployeeList from './pages/EmployeeList.tsx'
import EmployeeManagement from './pages/EmployeeManagement.tsx'
import TestEmployee from './pages/TestEmployee.tsx'
import EmployeeManagementList from './pages/testtest.tsx'
import AccountOverview from './pages/TestEmployee.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeeList />
    {/* <EmployeeManagement /> */}
    <AccountOverview />
    <EmployeeManagementList />
  </StrictMode>,
)
