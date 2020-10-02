import React from 'react';
// import logo from './logo.svg';
import './App.css';
// Replaced Login and Logout componenets with Navbar
import Navbar from './components/Navbar.js';
// import MainContainer from './components/MainContainer.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
// import Logout from './components/Logout.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import Signup from './components/Signup.js';
import MyLists from './components/MyLists.js';
import NewListForm from './components/NewListForm.js';
import { Route, Switch, withRouter } from 'react-router-dom';
// import currentUser from './reducers/currentUser';

class App extends React.Component{

  // The componentDidMount() method runs after the component output has been rendered to the DOM. componentDidMount is a lifecycle method.
  componentDidMount() {
    this.props.getCurrentUser()
  }
    render () {
      const { loggedIn } = this.props
      return (

      <div className="App">
        { loggedIn ? <Navbar {...this.props}/> : <Home /> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/lists' component={MyLists}/>
          <Route exact path='lists/new' component={NewListForm}/>
        </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
