import React from 'react';
// 1.  VVV We first grab the action creator
import { updateNewListForm } from '../actions/newListForm.js';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

// 3.  This means Redux gives us back a prop called updateNewTripForm
// which when invoked, actually Redux will now dispatch
const NewListForm = ({ formData, updateNewListForm, userId, list, handleSubmit, editMode }) => {

    const { title } = formData

    const handleChange = event => {
     
        const { name, value } = event.target
        // 4.  This is not an invocation of just the action creator,
        // it's now Redux dispatching the action built by the action
        // creator with the appropriate arguments
        updateNewListForm(name, value)


    }

    // const handleSubmit = event => event.preventDefault()

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData)
        }}>
            <br></br>
            <input 
                placeholder="Enter List Title"
                name="title"
                onChange={handleChange}
                value={title}   
            />
            <br></br>
            <br></br>
            <Button 
                type="submit"
                value={ editMode ? "Update List" : "Create List" }
            >
            Create List</Button>
        </form>
)};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.newListForm,
        userId
    }
}

// 2.  We pass the action creator to redux's connect function
// using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateNewListForm })(NewListForm);