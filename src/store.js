import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myLists from './reducers/myLists.js'
import signupForm from './reducers/signupForm.js'
import newListForm from './reducers/newListForm.js'
import fighters from './reducers/fighters.js'
import newFighterForm from './reducers/newFighterForm.js'
import thunk from "redux-thunk";

function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
}

// displaying different syntax options here: lines 8 & 9
const reducer = combineReducers({
    // Key of user, pointed to the store within ./actions/user.js

    currentUser,
    loginForm,
    myLists,
    signupForm,
    newListForm,
    fighters, 
    newFighterForm
})

// Putting our middleware together

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage();
const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;