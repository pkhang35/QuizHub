import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";

function PrivateRoutes(){
    const isLogin = getCookie("token");
    const location=useLocation();
    
    return(
        <>
        {isLogin ? (<Outlet/>)
        :(
        <Navigate 
            to="/login"
            state={{from:location}}
            replace
        />)}
        </>
    )
}
export default PrivateRoutes