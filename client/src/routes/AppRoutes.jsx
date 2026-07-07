import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import TaskDetails from "../pages/TaskDetails";
import Users from "../pages/Users";
import Trash from "../pages/Trash";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                index:true,
                element:<Login/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"tasks",
                element:<Tasks/>
            },
            {
                path:"task-details",
                element:<TaskDetails/>
            },
            {
                path:"users",
                element:<Users/>
            },
            {
                path:"trash",
                element:<Trash/>
            }
        ]
    }
]);