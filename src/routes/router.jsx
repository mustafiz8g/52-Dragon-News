import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/Pages/CategoryNews";



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
        path:'/news',
        element: <h2>news</h2>
    },
    {
        path: '/auth',
        element: <h2>Login</h2>
    },
    {
        path:'*',
        element: <h2>Error</h2>
    }
])

export default router;