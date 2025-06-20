import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Employee from './pages/EmployeeManagement.tsx'
import EmployeeList from './pages/EmployeeList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeeList />
  </StrictMode>,
)
