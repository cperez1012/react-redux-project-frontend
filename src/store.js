import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import userReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import thunk from "redux-thunk";

// displaying different syntax options here: lines 8 & 9
const reducer = combineReducers({
    // Key of user, pointed to the store within ./actions/user.js
    // user: userReducer,
    currentUser,
    loginForm
})

// Putting our middleware together
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;