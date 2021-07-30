import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
// import BallReducer from "./balls/ballReducer";
import rootReducer from "../RootReducer";

const store = createStore(rootReducer,composeWithDevTools());
export default store;