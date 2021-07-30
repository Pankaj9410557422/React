const initialState ={
    numofBats:20
}

const BUY_BAT = 'BUY_BAT';
const SELL_BAT = 'SELL_BAT';
const BatReducer=(state= initialState, action)=>{
    switch(action.type){
        case BUY_BAT:
            return {...state, numofBats:Number(state.numofBats)-Number(action.payload)}
        case SELL_BAT:
            return {...state, numofBats:Number(state.numofBats)+Number(action.payload)}
            default:
                return state; 
    }
}
export default BatReducer