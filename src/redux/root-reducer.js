import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import quoteReducer from "./quote/quote.reducer"

export default combineReducers({
    user: userReducer,
    randomQuoteId: quoteReducer
});