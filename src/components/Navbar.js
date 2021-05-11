import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';
// import Button from 'react-bootstrap/esm/Button';
import Button from '@material-ui/core/Button';

const Navbar = ({ currentUser, loggedIn }) => {

    return (
        <div>
            <ul>
                <li class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <br></br>
                    <img
                    src={currentUser.attributes.imageurl} 
                    alt="Profile Pic"
                    style={{ width: 100, height: 100 }}
                    />
                    <NavLink className="nav-link" exact activestyle= 
                    {{textDecoration:'underline'}}  to="/about">
                        <Button variant="contained" color="secondary">About Page</Button>
                    </NavLink>
                    {" "}
                    <NavLink className="nav-link" exact activestyle= 
                    {{textDecoration:'underline'}} to="/lists" >
                        <Button variant="contained" color="secondary">My Lists</Button>
                    </NavLink>
                    {" "}
                    <NavLink className="nav-link" exact activestyle= 
                    {{textDecoration:'underline'}} to="/lists/new" >
                        <Button variant="contained" color="secondary">New List</Button>
                    </NavLink>
                    {" "}
                    <NavLink className="nav-link" exact activestyle= 
                    {{textDecoration:'underline'}} to="/fighters" >
                        <Button variant="contained" color="secondary">Fighters</Button>
                    </NavLink>
                    {" "}
                    <NavLink className="nav-link" exact activestyle= 
                    {{textDecoration:'underline'}} to="/fighters/new" >
                        <Button variant="contained" color="secondary">Add New Fighters</Button>
                    </NavLink>
                    
                    <Logout className="nav-link" exact activestyle= 
                    {{textDecoration:'underline'}} />
                    <br></br>
                </li>
            </ul>
            { loggedIn ? <><p id="loggedin">Logged In as {currentUser.attributes.username}</p> </> : null}
            <p>{currentUser.attributes.bio}</p>
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
