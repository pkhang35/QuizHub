import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Topic from "../pages/Topic";
import Quiz from "../pages/Quiz";
import Question from "../pages/Question";
import Result from "../pages/Result";
import AnswerDetail from "../pages/Answers/AnswerDetail";
import Answers from "../pages/Answers";

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
            path:"/quizzes/:id",
            element:<Quiz/>,
        },
        
        
        {
            element:<PrivateRoutes/>,
            children:[
                {
                    path:"/questions/:quizId",
                    element:<Question/>,
                },
                {
                    path:"/result/:quizId",
                    element:<Result/>,
                },
                {
                    path:"/answers",
                    element:<Answers/>,
                },
                {
                    path:"/answers/:quizId",
                    element:<AnswerDetail/>,
                },
               
            ]
        },
       
        ]

    }
]
