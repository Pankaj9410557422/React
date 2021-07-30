import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes";

const initialState ={
    loading: false,
    users: [],
    error: ''
}

const userReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {...state, loading: true}
        case FETCH_USER_SUCCESS:
            return {error:'', loading:false,users:action.payload}
        case FETCH_USER_FAILURE:
            return {error:action.payload, loading:false, users:[]}
            default:
                return state;
    }
}
export default userReducer;