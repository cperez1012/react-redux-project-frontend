import React from 'react';
// 1.  VVV We first grab the action creator
import { updateNewFighterForm } from '../actions/newFighterForm.js';
// import { createList } from '../actions/myLists.js'
import { connect } from 'react-redux';

// 3.  This means Redux gives us back a prop called updateNewTripForm
// which when invoked, actually Redux will now dispatch
const NewFighterForm = ({ formData, updateNewFighterForm, handleSubmit, editMode }) => {

    const { name, alias, nationality, division, stance, height, reach, status, champion, win, loss, draw, ko } = formData

    const handleChange = event => {
        const { name, value } = event.target
        // 4.  This is not an invocation of just the action creator,
        // it's now Redux dispatching the action built by the action
        // creator with the appropriate arguments
        updateNewFighterForm(name, value)


    }

    // const handleSubmit = event => event.preventDefault()

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData)
        }}>
            <input 
                placeholder="Name of Fighter"
                name="name"
                onChange={handleChange}
                value={name}    
            />
            <br></br>
        
            <input 
                placeholder="Alias"
                name="alias"
                onChange={handleChange}
                value={alias}
            />
            <br></br>

            <input 
                placeholder="Narionality"
                name="nationality"
                onChange={handleChange}
                value={nationality}
            />

            <input 
                placeholder="Division"
                name="division"
                onChange={handleChange}
                value={division}
            />
            <br></br>
            
            <input 
                placeholder="Fighting Stance"
                name="stance"
                onChange={handleChange}
                value={stance}
            />
            <br></br>

            <input 
                placeholder="Fighting Stance"
                name="stance"
                onChange={handleChange}
                value={stance}
            />

            <input 
                placeholder="Fighting Stance"
                name="stance"
                onChange={handleChange}
                value={stance}
            />
            <br></br>

            <input 
                placeholder="Where they ever a Champion?"
                name="champion"
                onChange={handleChange}
                value={champion}
            />
            <br></br>

            <input 
                placeholder="Win"
                name="win"
                onChange={handleChange}
                value={win}
            />
            <br></br>

            <input 
                placeholder="loss"
                name="loss"
                onChange={handleChange}
                value={loss}
            />
            <br></br>

            <input 
                placeholder="draw"
                name="draw"
                onChange={handleChange}
                value={draw}
            />
            <br></br>

            <input 
                placeholder="ko"
                name="ko"
                onChange={handleChange}
                value={ko}
            />
            <br></br>

            <input  
                type="submit"
                value={ editMode ? "Update Fighter" : "Create Fighter" }
            />
        </form>
)};

const mapStateToProps = state => {
    const listId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.newFighterForm,
        listId
    }
}

// 2.  We pass the action creator to redux's connect function
// using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateNewFighterForm })(NewFighterForm);