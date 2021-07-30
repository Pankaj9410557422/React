import { createStore , applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
// import BallReducer from "./balls/ballReducer";
import rootReducer from "../RootReducer";
import thunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;