import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
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
            <Grid>
                <Grid item container spacing={1} alignItems="flex-end">                    
                <AccountCircle />
                <input placeholder="Username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfoInputChange} />{"  "}<br></br><br></br>    
                </Grid>
                <Grid item container spacing={1} alignItems="flex-end">
                <EmailIcon />
                <input placeholder="Email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />{"  "}<br></br>
                </Grid>
                <Grid item container spacing={1} alignItems="flex-end">
                <VpnKeyIcon />
                <input placeholder="Password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />{"  "}<br></br>
                </Grid>
                <Grid item container spacing={1} alignItems="flex-end">
                <ImageSearchIcon />
                <input placeholder="Image Url" value={signupFormData.imageurl} name="imageurl" type="text" onChange={handleUserInfoInputChange} />{"  "}<br></br>
                </Grid>
                <Grid>
                <SpeakerNotesIcon/>
                <input placeholder="Bio" value={signupFormData.bio} name="bio" type="text" onChange={handleUserInfoInputChange} />{"  "}<br></br>
                </Grid> 
                <Button variant="contained" color="secondary" type="submit"  value="signup">{"  "}
                    Signup
                </Button>
                <br></br>
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