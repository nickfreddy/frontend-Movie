import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";



const middleware = [thunk];
// const { createStore } = require("redux");
// const { composeWithDevTools } = require("redux-devtools-extension");

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

