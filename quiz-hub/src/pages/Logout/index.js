import { useEffect } from "react";
import { deleteAllCookies } from "../../helpers/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loading } from "../../actions";

function Logout(){
    const navigate =useNavigate()
    const dispatch=useDispatch()
    deleteAllCookies();
    dispatch(loading(false))
    useEffect(()=>{
       navigate("/login")
    },[])
    return(
        <></>
    )
}
export default Logout;