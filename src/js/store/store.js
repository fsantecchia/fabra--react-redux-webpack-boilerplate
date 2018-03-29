import {createStore, applyMiddleware} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from './../reducers';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(apiMiddleware, logger, thunk)
);

export default store;
