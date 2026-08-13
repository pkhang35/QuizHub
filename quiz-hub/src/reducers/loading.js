const loadingReducer = (state = false, action)=>{
        switch(action.type){
            case "LOADING":
                return state=action.status
            default:
                return state
        }
    }

export default loadingReducer;