import React from 'react';
// 1.  VVV We first grab the action creator
import { updateNewListForm } from '../actions/newListForm.js';
// import { createList } from '../actions/myLists.js'
import { connect } from 'react-redux';

// 3.  This means Redux gives us back a prop called updateNewTripForm
// which when invoked, actually Redux will now dispatch
const NewListForm = ({ formData, updateNewListForm, handleSubmit, editMode }) => {

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
            <input 
                placeholder="title"
                name="title"
                onChange={handleChange}
                value={title}    
            /><br></br>
            <input 
                type="submit"
                value={ editMode ? "Update List" : "Create List" }
            />
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