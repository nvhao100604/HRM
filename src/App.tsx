import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import DashboardLayout from "./pages/DashboardLayout";
import MainContent from "./pages/MainContent";
import EmployeePage from "./pages/EmployeePages/EmployeePage";
import EmployeeManagement from "./pages/EmployeePages/EmployeeManagement";
import FinancialDashboard from "./pages/FinancialDashboard";



const router = createBrowserRouter([
  { path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dev', element: <div>Dev Page Content</div> },
      { path: '/employee', element: <EmployeePage />},
      { path: 'employee/E-Manage', element: <EmployeeManagement /> },
      { path: '/payroll', element: <MainContent /> },
      { path: '/dashboard', element: <FinancialDashboard /> },
      { path: '/error', element: <ErrorPage /> },
    ],
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
