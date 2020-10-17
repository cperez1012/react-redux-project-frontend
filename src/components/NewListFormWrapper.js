import React from 'react';
import NewListForm from './NewListForm.js';
import { createList } from '../actions/myLists.js';
import { connect } from 'react-redux';

const NewListFormWrapper = ({ history, createList }) => {

    const handleSubmit = (formData, userId) => {
        createList({
            ...formData, 
            userId
        }, history)
    }
    return <NewListForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createList })(NewListFormWrapper);