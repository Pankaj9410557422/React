import {createStore}  from 'redux'

let initialState ={
    balls :5
}
function BallReducer(state =initialState, action){
    // update 
    // n type of changes
    // console.log("in store", action);
    switch(action.type){
        case "buy_ball":
            return{
                balls:state.balls-1
            }
        default:
            return initialState;
    }
}
const store = createStore(BallReducer);
export default store;