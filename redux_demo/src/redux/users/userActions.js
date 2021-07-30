import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes";
import axios from 'axios'
export const fetchUsersRequest =()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess=(users)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload:users
    }
}
export const fetchUsersFailure =(err)=>{
    return{
        type: FETCH_USER_FAILURE,
        payload:err
    }
}

export const fetchUsers=()=>{
    return async (dispatch)=>{
        dispatch(fetchUsersRequest());
        try{

        }
        catch{
            
        }
    }
}