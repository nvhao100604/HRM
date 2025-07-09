import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import {ErrorPage} from "./pages/Error/index";
import {FinancialDashboard} from "./pages/Statistic/index";
import { EmployeeManagement, EmployeePage} from './pages/EmployeePages/index';
import {Home} from "./pages/Home/Index";

const router = createBrowserRouter([
  { path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dev', element: <div>Dev Page Content</div> },
      { path: '/employee', element: <EmployeePage />},
      { path: 'employee/E-Manage', element: <EmployeeManagement /> },
      { path: '/payroll', element: <Home /> },
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
