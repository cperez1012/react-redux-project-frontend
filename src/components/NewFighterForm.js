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
        <input placeholder="Name" value ={fighterForm.name} name= "name" type="text" onChange ={handleChange} />
        <input placeholder="Alias" value ={fighterForm.alias} name= "alias" type="text" onChange = {handleChange} />
        <input placeholder="Nationality" value ={fighterForm.nationality} name= "nationality" type="text" onChange = {handleChange} />
        
        <select placeholder="Choose Fighter Division">
            <option value = "Minimumweight">Minimumweight, 105 pounds (48 kg)</option>
            <option value = "Light Flyweight">Light Flyweight, 108 pounds (49 kg)</option>
            <option value = "Flyweight">Flyweight, 112 pounds (51 kg)</option>
            <option value = "Super Flyweight">Super Flyweight, 115 pounds (52 kg)</option>
            <option value = "Bantamweight">Bantamweight, 118 pounds (53.5 kg)</option>
            <option value = "Super Bantamweight">Super Bantamweight, 122 pounds (55 kg)</option>
            <option value = "Featherweight">Featherweight, 126 pounds (57 kg)</option>
            <option value = "super middleweight">Super Featherweight, 130 pounds (59 kg)</option>
            <option value = "Lightweight">Lightweight, 135 pounds (61 kg)</option>
            <option value = "Super Lightweight">Super Lightweight, 140 pounds (63.5 kg)</option>
            <option value = "Welterweight">Welterweight, 147 pounds (67 kg)</option>
            <option value = "Super Welterweight">Super Welterweight, 154 pounds (70 kg)</option>
            <option value = "Middleweight">Middleweight, 160 pounds (72.5 kg)</option>  
            <option value = "Super Middleweight">Super Middleweight, 168 pounds (76 kg)</option>
            <option value = "Light Heavyweight">Light Heavyweight, 175 pounds (79 kg)</option>
            <option value = "Cruiserweight">Cruiserweight, 200 pounds (91 kg)</option>
            <option value = "Heavyweight, unlimited">Heavyweight, unlimited</option>
        </select>
            
        <select placeholder="Stance Tyoe">
            <option value = "Orthodox">Orthodox</option>
            <option value = "Southpaw">Southpaw</option> 
        </select>

        <input placeholder="Height" value ={fighterForm.height} name= "height" type="text" onChange = {handleInputChange} />
        <input placeholder="Reach" value ={fighterForm.reach} name= "reach" type="text" onChange = {handleInputChange} />
        
        <select placeholder="Is this fighter still active in the sport?">
            <option value= "Active">Active</option>
            <option value= "Inactive">Inactive</option>
        </select>

        <input 
            type = "checkbox"
            checked ={ this.state.checked }
            onChange={ () => console.log("Changed") }
        />
        
        <input placeholder="Win" value ={fighterForm.win} parse={ value => parseInt(value, 100)} name= "Win" type="number" onChange = {handleChange} />
        <input placeholder="Loss" value ={fighterForm.loss} parse={ value => parseInt(value, 100) } name= "loss" type="number" onChange = {handleChange} />
        <input placeholder="Draw" value ={fighterForm.draw} parse= { value => parseInt(value, 100)} name= "draw" type="number" onChange = {handleChange} />
        <input placeholder="KO" value ={fighterForm.ko} parse= { value => parseInt(value, 100) } name= "ko" type="number" onChange = {handleChange} />

        <input  value = "Submit" type="submit" />
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