import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Answers from "../pages/Answers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Topic from "../pages/Topic";

export const routes=[
    {
        path:"/",
        element:<LayoutDefault/>,
        children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/topic",
            element:<Topic/>,
        },
        
        {
            path:"/login",
            element:<Login/>,
        },
        {
            path:"/register",
            element:<Register/>,
        },
        {
            path:"/logout",
            element:<Logout/>,
        },
        
        {
            element:<PrivateRoutes/>,
            children:[
                {
                    path:"/answers",
                    element:<Answers/>,
                },
               
            ]
        },
       
        ]

    }
]
