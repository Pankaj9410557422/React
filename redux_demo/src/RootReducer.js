import { combineReducers } from "redux";
import BallReducer from "./redux/balls/ballReducer";
import BatReducer from "./redux/bats/BatReducer";
import userReducer from "./redux/users/userReducer";
const rootReducer =combineReducers({
    ball:BallReducer,
    bat:BatReducer,
    user:userReducer
})
export default rootReducer