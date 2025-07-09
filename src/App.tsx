import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/layout";
import { Employee, Error, Home, Statistic } from "./pages";
import { EmployeeIndex, EmployeeManagement } from "./components/UI components/employee";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dev', element: <div>Dev Page Content</div> },
      {
        path: '/employee',
        element: <Employee />,
        errorElement: <Error />,
        children: [
          { index: true, element: <EmployeeIndex /> },
          { path: '/employee/management', element: <EmployeeManagement /> }
        ]
      },
      { path: '/payroll', element: <Home /> },
      { path: '/dashboard', element: <Statistic /> },
      { path: '/error', element: <Error /> },
    ],
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
