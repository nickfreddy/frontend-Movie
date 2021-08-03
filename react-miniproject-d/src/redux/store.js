import rootReducer from './reducers'
const { createStore } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");


const store = createStore(rootReducer, composeWithDevTools())

export default store;
