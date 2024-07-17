import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../error/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
