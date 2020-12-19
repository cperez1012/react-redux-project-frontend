import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';

const Navbar = ({ currentUser, loggedIn }) => {

    return (
        <div className="Navbar">
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/lists" >My Lists    | </NavLink>
                    <NavLink exact activeClassName="active" to="/lists/new" >New List    |</NavLink>
                    <NavLink exact activeClassName="active" to="/fighters" > Fighters    |</NavLink>
                    <NavLink exact activeClassName="active" to="/fighters/new" > Add New Fighters</NavLink>
                    { loggedIn ? <><p id="loggedin">Logged In as {currentUser.attributes.username}</p>    
                    <img 
                    src={currentUser.attributes.imageUrl} 
                    alt="profile pic"
                    style={{ width: 36 }} 
                    />
                    <p>{currentUser.attributes.bio}</p>
                    <Logout/></>  : null }
                </li>
            </ul>

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
