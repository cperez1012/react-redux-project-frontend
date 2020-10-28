import React from 'react';
import logo from './image/logo.png'
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
import Fighters from './components/MyFighters.js';
// import NewListForm from './components/NewListForm.js';
import ListCard from './components/ListCard.js';
// import FighterCard from './components/FighterCard.js'
import NewListFormWrapper from './components/NewListFormWrapper.js';
import EditListFormWrapper from './components/EditListFormWrapper.js';
import { Route, Switch, withRouter } from 'react-router-dom';


// import currentUser from './reducers/currentUser';

class App extends React.Component{

  // The componentDidMount() method runs after the component output has been rendered to the DOM. componentDidMount is a lifecycle method.
  componentDidMount() {
    this.props.getCurrentUser()
  }
    render () {
      const { loggedIn, lists } = this.props
      return (

      <div className="App">
        <img src={logo} alt="Boxing Fan App"/>
        { loggedIn ? <Navbar location={this.props.location}/> : <Home /> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/lists' component={MyLists}/>
          <Route exact path='/lists/new' component={NewListFormWrapper}/>
          <Route exact path='/lists/:id' render={props =>{
            const list = lists.find(list => list.id === props.match.params.id)
            console.log(list)
            debugger
            return <ListCard list={list} {...props}/>
            }
          }/>,
          <Route exact path='/lists/:id/edit' render={props => {
            const list = lists.find(list => list.id === props.match.params.id)
            return <EditListFormWrapper list={list} {...props}/>
            }
          }/>
          <Route exact path='/fighters' component={Fighters}/>
          {/* <Route exact path='/fighters/new' component={NewFighterFormWrapper}/>
          <Route exact path='/fighters/:id' render={props =>{
              const fighter = fighters.find(fighter => fighter.id == props.match.params.id)
            console.log(fighter) 
            return <EditFighterFormWrapper fighter={fighter} {...props}/>
          }}  */}
          {/* /> */}
          {/* <Route exact path='/fighters' component={MyFighters}/>
          <Route exact path='/fighters/new' component={NewFighterFormWrapper}/>
          <Route exact path='/fighters/:id' component={props =>{
            const fighter = fighters.find(fighter => fighter.id === props.match.params.id)
            return <EditFighterFormWrapper fighter={fighter} {...props}/>
            }
          } */}
          {/* /> */}
        </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    lists: state.myLists,
    fighters: state.myFighters
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
