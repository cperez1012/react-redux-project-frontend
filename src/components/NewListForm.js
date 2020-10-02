import React from 'react';
import { updateNewListForm } from '../actions/newListForm.js';
import { connect } from 'react-redux';

const NewListForm = ({ name }) => {

    const handleChange = event => {
        const { name, value } = event.target
        updateNewListForm(name, value)


    }

    const handleSubmit = event => event.preventDefault()

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="title"
                name="title"
                onChange={handleChange}
                value={name}    
            /><br></br>
            <input 
                type="submit"
                value="Create List"
            />
        </form>
    )};

const mapStateToProps = (state) => {
    const { name } =state.newListForm
    return (
        name
    )
}

export default connect(mapStateToProps, { updateNewListForm })(NewListForm);