import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Button from 'react-bootstrap/esm/Button';
import Button from '@material-ui/core/Button';
import Form from "react-bootstrap/Form";

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

    const handleUserInfoInputChange = event => {

        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }


const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
}


    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <TextField placeholder="Username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfoInputChange} />
                <br></br>
                <br></br>
                <TextField placeholder="Email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />
                <br></br>
                <br></br>
                <TextField placeholder="Password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
                <br></br>
                <br></br>
                <TextField placeholder="Image Url" value={signupFormData.imageurl} name="imageurl" type="text" onChange={handleUserInfoInputChange} />
                <br></br>
                <br></br>
                <TextField placeholder="Bio" value={signupFormData.bio} name="bio" type="text" onChange={handleUserInfoInputChange} />
                <br></br>
                <br></br>
                <Button variant="contained" color="secondary" type="submit"  value="signup">
                    Signup
                </Button> 
            </Grid>          
        </Form>

    )

}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);