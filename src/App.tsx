import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import ErrorPage from "./pages/ErrorPage";
import AccountOverview from "./pages/AccountOverview";
import DashboardLayout from "./pages/DashboardLayout";
import MainContent from "./pages/MainContent";



const router = createBrowserRouter([
  { path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dev', element: <div>Dev Page Content</div> },
      { path: 'employee/:id', element: <AccountOverview /> },
      { path: 'employee', element: <EmployeeList /> },
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
