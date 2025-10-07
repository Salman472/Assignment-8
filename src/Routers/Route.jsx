import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";


const router=createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        HydrateFallback:<h1>Loading....</h1>,
        children:[
            {
                index:true,
                path:'/',
                element:<Home/>
            },
            {
                path:'/apps',
                element:<Apps/>
            },
            {
                path:'/installation',
                element:<Installation/>
            }
        ]
    }
])

export default router;