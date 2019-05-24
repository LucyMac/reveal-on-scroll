import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';

import allReducers from '../reducers';
import { axiosConfigStore } from './axiosConfig';

const defaultState = {};

// Create browser history
export const history = createBrowserHistory();
const router = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [reduxThunk, router, axiosConfigStore];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const store = createStore(
  allReducers,
  defaultState,
  composeEnhancers(applyMiddleware(...middleware))
);
