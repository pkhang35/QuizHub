import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";

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
            
            element:<PrivateRoutes/>,
            children:[
                {
                    
                },
               
            ]
        },
       
        ]

    }
]
