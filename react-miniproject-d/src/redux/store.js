import rootReducer from './reducers'
import thunk from "redux-thunk";
import {applyMiddleware } from "redux";

const middleware = [thunk];
const { createStore } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

