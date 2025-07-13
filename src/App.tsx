import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/layout";
import { Department, Employee, Error, Home, Login, Payroll, Recruitment, Statistic } from "./pages";
import { EmployeeIndex, EmployeeManagement } from "./components/UI components/employee";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/department', element: <Department /> },
      {
        path: '/employee',
        element: <Employee />,
        errorElement: <Error />,
        children: [
          { index: true, element: <EmployeeIndex /> },
          { path: '/employee/management', element: <EmployeeManagement /> }
        ]
      },
      { path: '/payroll', element: <Payroll /> },
      { path: '/recruitment', element: <Recruitment /> },
      { path: '/statistic', element: <Statistic /> },
      { path: '/error', element: <Error /> },
      { path: '/login', element: <Login /> },

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

export default App;
