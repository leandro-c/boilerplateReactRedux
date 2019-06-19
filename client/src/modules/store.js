import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';

// Logger with default options
import logger from "redux-logger";

import reducers from "../reducers/index";

export default function configureStore(initialState) {
  const reducer = combineReducers(reducers);
  const store = createStore(reducer, initialState, applyMiddleware(logger, thunkMiddleware));
  return store;
}