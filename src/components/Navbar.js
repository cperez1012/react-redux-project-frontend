import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Login from './Login.js';
import Logout from './Logout.js';

const Navbar = ({ currentUser, loggedIn }) => {
    return (
        <div className="Navbar">
            <NavLink exact activeClassName="active" to="/lists" >My Lists    | </NavLink>
            <NavLink exact activeClassName="active" to="/lists/new" >New List    |</NavLink>
            { loggedIn ? <Logout/>  : null }
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
