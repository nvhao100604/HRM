import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/layout";
import { Department, Employee, Error, Home, Login, Payroll, Recruitment, ResetPassword, Statistic, Verify } from "./pages";
import { EmployeeIndex, EmployeeManagement } from "./pages/employee";
import { SWRConfig } from "swr";
import { api } from "./config/axios";
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
        children: [
          { index: true, element: <EmployeeIndex /> },
          { path: '/employee/management', element: <EmployeeManagement /> }
        ]
      },
      { path: '/payroll', element: <Payroll /> },
      { path: '/recruitment', element: <Recruitment /> },
      { path: '/statistic', element: <Statistic /> },
      { path: '/error', element: <Error /> },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <Error /> },
  { path: '/reset_password', element: <ResetPassword />, errorElement: <Error /> },
  { path: '/verify', element: <Verify />, errorElement: <Error /> },
]);

function App() {
  const fetcher = (url: string) => api.get(url).then(res => res.data);
  return (
    <SWRConfig value={{ fetcher, shouldRetryOnError: false, revalidateOnFocus: false, loadingTimeout: 5000 }}>
      <RouterProvider router={router} />
    </SWRConfig >
  )
}

export default App;
