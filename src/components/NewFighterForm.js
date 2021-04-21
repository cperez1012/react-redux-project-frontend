import React from 'react';
import { updateNewFighterForm } from '../actions/newFighterForm.js';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const NewFighterForm = ({ formData, updateNewFighterForm, handleSubmit, editMode, lists }) => {
    
    const {name, imageurl, alias, nationality, division, stance, height, reach, status, champion, win, loss, draw, ko, list_id, ranking} = formData

    const handleChange = event => {
    
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        console.log(formData)
        
        updateNewFighterForm(name, value)
    }

    return (
            <div>
                <h1>Fighter Stats</h1>
                <form onSubmit={event => {
                    event.preventDefault()
                    handleSubmit(formData)
                }}>
                    <ol>
                        <ul>
                        <label>Ranking: </label>
                        <br></br> 
                        <input
                            placeholder="Enter Rating"
                            name="ranking"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            onChange={handleChange}
                            value={ranking}
                        />
                        </ul>
                        <ul>
                        <label>Add Name: </label>
                        <br></br> 
                        <input
                            placeholder="Enter Name"
                            name="name"
                            onChange={handleChange}
                            value={name} 
                        />
                        </ul>
                        <br></br>
                        <img
                        src={imageurl} 
                        alt="Fighter Pic"
                        style={{ width: 100, height: 100 }} 
                        /><br></br>
                        <ul>
                        <label>Image: </label>
                        <br></br> 
                        <input
                            placeholder="Enter Image Url"
                            name="imageurl"
                            onChange={handleChange}
                            value={imageurl} 
                        />
                        </ul>
                        <label>Add Alias: </label>
                        <br></br>
                        <ul>
                        <input
                            placeholder="Enter Alias"
                            name="alias"
                            onChange={handleChange}
                            value={alias} 
                        />
                        </ul>
                        <label>Add Nationality: </label>
                        <br></br>
                        <ul>
                        <input
                            placeholder="Enter Nationality"
                            name="nationality"
                            onChange={handleChange}
                            value={nationality} 
                        />
                        </ul>
                        <label>Choose Division: </label>
                        <br></br>
                        <select name="division"
                            value={"" + division}
                            onChange={handleChange}>
                            <option  disabled>Choose the following weight division</option>
                            <option value="Flyweight">Flyweight</option>
                            <option value="Bantamweight">Bantamweight</option>
                            <option value="Featherweight">Featherweight</option>
                            <option value="Lightweight">Lightweight</option>
                            <option value="Welterweight">Welterweight</option>
                            <option value="Middleweight">Middleweight</option>
                            <option value="Light Heavyweight">Light Heavyweight</option>
                            <option value="Cruiserweight">Cruiserweight</option>
                            <option value="Heavyweight">Heavyweight</option>
                        </select>
                        <br></br>
                        <label>Choose Fighter's Stance: </label>
                        <br></br>
                        <select name="stance"
                            value={stance}
                            onChange={handleChange}>
                            <option disabled>Choose the following stance type</option>
                            <option value="Orthodox">Orthodox</option>
                            <option value="Southpaw">Southpaw</option>
                        </select>
                        <br></br>
                        <label>Add Height: </label>
                        <br></br>
                        <input
                            placeholder="Enter Height (i.e 5 ft 5 in)"
                            name="height"
                            onChange={handleChange}
                            value={height}
                        />
                        <br></br>
                        <label>Add Reach: </label>
                        <br></br>
                        <input
                            placeholder="Enter Reach (i.e 68 in)"
                            name="reach"
                            onChange={handleChange}
                            value={reach}
                        />
                        <br></br>
                        <label>Are they still fighting?</label>
                        <br></br>
                        <select name="status"
                            defaultValue={status}
                            onChange={handleChange}>
                            <option disabled>Choose whether fighter is still competing</option>
                            <option value="inactive">inactive</option>
                            <option value="active">active</option>
                        </select>
                        <br></br>
                        <label>Check if they ever were a World Champion</label>
                        <input
                            type="checkbox"
                            name="champion"
                            checked={champion}
                            onChange={handleChange}                  
                        />
                        <br></br>
                        <label>W:</label>
                        <input
                            placeholder="Enter number of wins"
                            name="win"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            onChange={handleChange}
                            value={win}
                        />
                        <br></br>
                        <label>L:</label>
                        <input
                            placeholder="Enter number of losses"
                            name="loss"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            onChange={handleChange}
                            value={loss}
                        />
                        <br></br>
                        <label>D:</label>
                        <input
                            placeholder="Enter number of draws"
                            name="draw"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            onChange={handleChange}
                            value={draw}
                        />
                        <br></br>
                        <label>KO:</label>
                        <input
                            placeholder="Enter number of KO"
                            name="ko"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            onChange={handleChange}
                            value={ko}
                        />
                        <br></br>
                        <label>List for Fighter: </label>
                        <br></br>
                        <select name="list_id"
                            value={list_id}
                            onChange={handleChange}>
                            
                            {lists.map(list => 
                            
                            <option key={list.id} value={list.id}>{list.attributes.title}</option>)}
                        </select>
                        <br></br>  
                        <br></br>           
                        <Button
                            variant="contained" color="secondary"
                            type="submit"
                            value={ editMode ? "Update Fighter" : "Create Fighter" }>
                                Create Fighter
                        </Button>
                    </ol>
                </form>
            </div>       
    )
}
const mapStateToProps = state => {

    return {
        formData: state.newFighterForm,
        lists: state.myLists

    }
};

export default connect(mapStateToProps, { updateNewFighterForm })(NewFighterForm)