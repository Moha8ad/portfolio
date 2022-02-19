import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; 

import userReducer from "./user/user.reducer";
import quoteReducer from "./quote/quote.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}

const rootReducer = combineReducers({
    user: userReducer,
    quote: quoteReducer
});

export default persistReducer(persistConfig, rootReducer)