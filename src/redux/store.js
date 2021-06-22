import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

const middleWares = [];

//if (process.env.NODE_ENV === 'development') {
middleWares.push(logger)
//}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
