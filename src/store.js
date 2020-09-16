import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import userReducer from './reducers/users.js'
import thunk from "redux-thunk";

const reducer = combineReducers({
    // Key of user, pointed to the store within ./actions/user.js
    user: userReducer
})

// Putting our middleware together
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;