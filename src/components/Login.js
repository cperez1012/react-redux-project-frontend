import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';

const Login = ({ loginForm, updateLoginForm, login, history }) => {

        const handleInputChange = event => {
            const { name, value } = event.target
            const updatedFormInfo = {
                ...loginForm,
                [name]: value
            }
            updateLoginForm(updatedFormInfo)
        }

        const handleSubmit = event => {
            event.preventDefault()
            login(loginForm, history)
        }
    return (

        <form onSubmit = {handleSubmit}>
            <input placeholder="Username" value ={loginForm.username} name= "username" type="text" onChange ={handleInputChange} />
            <input placeholder="Password" value ={loginForm.password} name= "password" type="text" onChange = {handleInputChange} />
            <input  value = "Log In" type="submit" />
        </form>
    )
}
// It should take a first argument called state, optionally a second argument called ownProps, and return a plain object containing the data that the connected component needs.

// This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes
const mapStateToProps = state => {
    return {

        loginForm: state.loginForm

    }
}

export default connect(mapStateToProps, { updateLoginForm, login }, )(Login)
