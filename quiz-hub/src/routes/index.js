import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Answers from "../pages/Answers";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
            path:"/answers",
            element:<Answers/>,
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
            element:<PrivateRoutes/>,
            children:[
                {
                    
                },
               
            ]
        },
       
        ]

    }
]
