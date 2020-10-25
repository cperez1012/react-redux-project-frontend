import React from 'react';
import NewFighterForm from './NewFighterForm.js';
import { createFighter } from '../actions/myFighters.js';
import { connect } from 'react-redux';

const NewFighterFormWrapper = ({ history, createFighter }) => {

    const handleSubmit = (formData, listId) => {
        createFighter({
            ...formData, 
            listId
        }, history)
    }
    return <NewFighterForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createFighter })(NewFighterFormWrapper);