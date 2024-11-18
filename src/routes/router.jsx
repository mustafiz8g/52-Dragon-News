import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
// import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetails from "../components/Pages/NewsDetails";
import PrivateRoute from "./privateRoute";
import App from "../App";



const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path:"/category/:id",
                // element: <h>htis is category</h>,
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element: <Login></Login>
            },
            {
                path:"/auth/register",
                element:   <Register></Register>
            }
        ]
    },
    {
        path: '/career',
        element: <App></App>
    },
    {
        path:'*',
        element: <h2>Error</h2>
    }
])

export default router;