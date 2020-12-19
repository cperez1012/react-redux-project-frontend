Have a seperate file for each reducer.\

Components by convention are named Capitalized camel case.

For adding state to Redux you Create a reducer and put and action to it.

counterReducer.js

const initialState = {
    count: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default: 
            return state
    }
}


Counter.js Component

import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
    }

    decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>     
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);

const reducer = combineReducers({

    currentUser,
    loginForm,
    myLists,
    signupForm,
    newListForm,
    fighters, 
    newFighterForm,
    counterReducer
})

Added counterReducer to combineReducers

index.js


import Counter from './components/Counter';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={ store }>
    <Router>
      <App />
      <Counter />
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);