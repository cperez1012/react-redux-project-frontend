import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// First import Redux
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from "redux-thunk";
// import userReducer from './reducers/users.js'

// const reducer = combineReducers({
//   // Key of user, pointed to the store within ./actions/user.js
//   user: userReducer
// })

// Putting our middleware together
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
import store from './store.js'


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={ store }>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
