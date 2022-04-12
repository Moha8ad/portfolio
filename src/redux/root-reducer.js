import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; 

import userReducer from "./user/user.reducer";
import quoteReducer from "./quote/quote.reducer";
import wordReducer from "./word/word.reducer";
import timedReducer from "./timed/timed.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['word']
}

const rootReducer = combineReducers({
    user: userReducer,
    quote: quoteReducer,
    word: wordReducer,
    timed: timedReducer
});

export default persistReducer(persistConfig, rootReducer)