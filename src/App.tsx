import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeePages/EmployeeList";
import ErrorPage from "./pages/ErrorPage";
import DashboardLayout from "./pages/DashboardLayout";
import MainContent from "./pages/MainContent";
import { useEffect } from "react";
import EmployeePage from "./pages/EmployeePages/EmployeePage";



const router = createBrowserRouter([
  { path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dev', element: <div>Dev Page Content</div> },
      { path: '/employee', element: <EmployeePage />,
        children: [
          { path: '/employee/E-Manage', element: <EmployeeList /> },
        ]
       },

      { path: '/payroll', element: <MainContent /> },
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
