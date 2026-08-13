import { combineReducers } from "redux";
import loadingReducer from "./loading";



const allReducers = combineReducers({
    loadingReducer,
    //thêm nhiều reducer vào đâu 
})
export default allReducers;