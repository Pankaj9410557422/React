import { combineReducers } from "redux";
import BallReducer from "./redux/balls/ballReducer";
import BatReducer from "./redux/bats/BatReducer";
const rootReducer =combineReducers({
    ball:BallReducer,
    bat:BatReducer
})
export default rootReducer