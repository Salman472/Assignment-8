import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";

import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Home from "../Pages/Home";
import AppDetails from "../Components/AppDetails";
import AppNotFound from "../Components/AppNotFound";
import PageNotFound from "../Pages/PageNotFound";


const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        hydrateFallbackElement:<h1>Loading....</h1>,
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
            },
            {
                path:'/app-details/:id',
                element:<AppDetails/>
            },
            {
                path:'*',
                element:<PageNotFound/>
            }
        ]
    }
])

export default router;