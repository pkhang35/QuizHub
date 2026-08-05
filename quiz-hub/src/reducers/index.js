import { combineReducers } from "redux";
import cartReducer from "./cart";



const allReducers = combineReducers({
    cartReducer,
    //thêm nhiều reducer vào đâu 
})
export default allReducers;