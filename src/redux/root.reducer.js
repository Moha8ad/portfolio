import { combineReducers } from "redux";

import messageReducer from "./reducer"; 

export default combineReducers({
    name: messageReducer
});