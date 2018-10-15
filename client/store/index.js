import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import vets from './vets';

const reducer = combineReducers({ user, vets }); // Add all subreducers here
const middleware = composeWithDevTools(
  // Gives us excellent debugging tools for redux
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

// Central export of all redux thunks and/or action creators
export default store;
export * from './user';
export * from './vets';
