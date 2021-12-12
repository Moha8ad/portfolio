import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root.reducer';

import messageReducer from './reducer'

const middlewares = [logger];

const store = createStore(messageReducer, applyMiddleware(...middlewares))

export default store;