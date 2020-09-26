import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
// import currentUser from './reducers/currentUser';

class App extends React.Component{

  // The componentDidMount() method runs after the component output has been rendered to the DOM. componentDidMount is a lifecycle method.
  componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/users/2")
  //     .then(r=>r.json()) 
  //     .then(console.log)
    this.props.getCurrentUser()
  }
    render () {
      return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      // "hello I'm React"
      this.props.currentUser ? <Logout/> : <Login />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state
  }
}

// export default connect(null, { getCurrentUser })(App);
export default connect(mapStateToProps, { getCurrentUser })(App);
