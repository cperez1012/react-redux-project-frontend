import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Login from './Login.js';
import Logout from './Logout.js';

const Navbar = ({ currentUser, loggedIn }) => {
    debugger
    return (
        <div className="Navbar">
            <NavLink exact activeClassName="active" to="/lists" >My Lists    | </NavLink>
            <NavLink exact activeClassName="active" to="/lists/new" >New List    |</NavLink>
            <NavLink exact activeClassName="active" to="/fighters" >My Fighters  </NavLink>
            { loggedIn ? <><p id="loggedin">Logged In as {currentUser.attributes.username}</p>    <img 
    src={currentUser.attributes.image_url} 
    alt="profile pic"
    /><Logout/></>  : null }
    <p>{currentUser.attributes.bio}</p>

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser    
    }
}

export default connect(mapStateToProps)(Navbar)
