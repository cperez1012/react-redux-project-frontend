import React from 'react';
// import Button from 'react-bootstrap/esm/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/currentUser.js';
import Button from '@material-ui/core/Button';

// Don't need handle submit because there is no data that needs to be passed through
const Logout = ({ logout, history }) => {

    return (

        <form onSubmit = { (event) => {
            event.preventDefault()
            logout()
            history.push('/')
            }
        }>
            <Button className="navbar-lists" variant="contained" color="secondary" value = "Logout" type="submit">
            Logout
            </Button>
        </form>
    )
}
// It should take a first argument called state, optionally a second argument called ownProps, and return a plain object containing the data that the connected component needs.

// This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes

// When you don't need a state argument, put null
export default withRouter(connect(null, { logout } )(Logout))
