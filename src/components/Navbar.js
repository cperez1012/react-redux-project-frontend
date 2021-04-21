import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';
// import Button from 'react-bootstrap/esm/Button';
import Button from '@material-ui/core/Button';

const Navbar = ({ currentUser, loggedIn }) => {

    return (
        <div className="Navbar">
            <ul>
                <li>
                    <br></br>
                    <NavLink exact activeClassName="active" to="/about">
                        <Button variant="contained" color="secondary">About Page</Button>
                    </NavLink>
                    {" "}
                    <NavLink exact activeClassName="active" to="/lists" >
                        <Button variant="contained" color="secondary">My Lists</Button>
                    </NavLink>
                    {" "}
                    <NavLink exact activeClassName="active" to="/lists/new" >
                        <Button variant="contained" color="secondary">New List</Button>
                    </NavLink>
                    {" "}
                    <NavLink exact activeClassName="active" to="/fighters" >
                        <Button variant="contained" color="secondary">Fighters</Button>
                    </NavLink>
                    {" "}
                    <NavLink exact activeClassName="active" to="/fighters/new" >
                        <Button variant="contained" color="secondary">Add New Fighters</Button>
                    </NavLink>
                    {" "}
                    { loggedIn ? <><p id="loggedin">Logged In as {currentUser.attributes.username}</p>    
                    <img
                        src={currentUser.attributes.imageurl} 
                        alt="Profile Pic"
                        style={{ width: 100, height: 100 }}
                    />
                    <p>{currentUser.attributes.bio}</p>
                    <Logout/></>  : null }
                </li>
            </ul>
            <p>You must first create a list in order to then add a fighter to that list!</p>
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
