import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/esm/Button';
import Button from '@material-ui/core/Button';

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
            <div className="login">
            <Form onSubmit = {handleSubmit}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>

                <Grid item>
                    <TextField id="input-with-icon-grid" label="Username" placeholder="Enter Your Username" value ={loginForm.username} name= "username" type="text" onChange ={handleInputChange}  />
                </Grid>
                <br></br>
                <br></br>
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Password" placeholder="Enter Your Password" value ={loginForm.password} name= "password" type="text" onChange ={handleInputChange}  />
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Button variant="contained" color="secondary" type="submit" value="Login">
                    Login
                </Button>
                </Grid>
            </Form>
        </div>
    )

}

// It should take a first argument called state, optionally a second argument called ownProps, and return a plain object containing the data that the connected component needs.

// This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes
const mapStateToProps = state => {
    return {

        loginForm: state.loginForm

    }
}

export default connect(mapStateToProps, { updateLoginForm, login, }, )(Login);
