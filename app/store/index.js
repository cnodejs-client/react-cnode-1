import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

const middleware = [ thunk ];
const loggerMiddleware = createLogger();

middleware.push(loggerMiddleware);

const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(...middleware)
);

export default store;
