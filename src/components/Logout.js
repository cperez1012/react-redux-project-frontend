import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js';


// Don't need handle submit because there is no data that needs to be passed through
const Logout = ({ logout }) => {

    return (

        <form onSubmit = { logout }>
            <input  value = "Logout" type="submit" />
        </form>
    )
}
// It should take a first argument called state, optionally a second argument called ownProps, and return a plain object containing the data that the connected component needs.

// This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes

// When you don't need a state argument, put null
export default connect(null, { logout }, )(Logout)
