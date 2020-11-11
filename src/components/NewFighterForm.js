import React, { Component } from 'react';
import { updateNewFighterForm } from '../actions/newFighterForm.js';
// import addFighter from '../reducers/fighters.js';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/esm/Button';

class NewFighterForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            alias: '',
            nationality: '',
            division: '',
            stance: '',
            height: '',
            reach: '',
            champion: false,
            win: 0,
            loss: 0,
            draw: 0,
            ko: 0
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFighter(this.state);

    };
    //preventDefault is a synthetic event to handle events from button, input and form elements.

    handleChange = event => {
        this.setState({
            name: event.target.value
        });
    };

    render() {
        // debugger
        return (
            <div>
                <h1>Add Fighter</h1>
                <form onSubmit={this.handleSubmit}>
                    <ol>
                        <ul>
                        <label>Add Name: </label>
                        <br></br> 
                        <input
                            placeholder="Enter Name"
                            type="name"
                            onChange={this.handleChange}
                            value={this.state.name} 
                        />
                        </ul>
                        <label>Add Alias: </label>
                        <br></br>
                        <ul>
                        <input
                            placeholder="Enter Alias"
                            type="alias"
                            onChange={this.handleChange}
                            value={this.state.alias} 
                        />
                        </ul>
                        <label>Add Nationality: </label>
                        <br></br>
                        <ul>
                        <input
                            placeholder="Enter Nationality"
                            type="nationality"
                            onChange={this.handleChange}
                            value={this.state.nationality} 
                        />
                        </ul>
                        <label>Choose Division: </label>
                        <br></br>
                        <select name="division"
                            value={"" + this.state.division}
                            onChange={this.handleChange}>
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
                            value={"" + this.state.stance}
                            onChange={this.handleChange}>
                            <option disabled>Choose the following stance type</option>
                            <option value="Orthodox">Orthodox</option>
                            <option value="Southpaw">Southpaw</option>
                        </select>
                        <br></br>
                        <label>Add Height: </label>
                        <br></br>
                        <input
                            placeholder="Enter Height (i.e 5 ft 5 in)"
                            type="height"
                            onChange={this.handleChange}
                            value={this.state.height}
                        />
                        <br></br>
                        <label>Add Reach: </label>
                        <br></br>
                        <input
                            placeholder="Enter Reach (i.e 68 in)"
                            type="reach"
                            onChange={this.handleChange}
                            value={this.state.reach}
                        />
                        <br></br>
                        <label>Check if they ever were a World Champion</label>
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            value={this.state.champion}
                        />
                        <br></br>
                        <label>W:</label>
                        <input
                            placeholder="Enter number of wins"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            value={this.state.win}
                        />
                        <br></br>
                        <label>L:</label>
                        <input
                            placeholder="Enter number of losses"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            value={this.state.loss}
                        />
                        <br></br>
                        <label>D:</label>
                        <input
                            placeholder="Enter number of draws"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            value={this.state.draw}
                        />
                        <br></br>
                        <label>KO:</label>
                        <input
                            placeholder="Enter number of KO"
                            type="number"
                            pattern="[0-200]*"
                            inputMode="numeric"
                            value={this.state.draw}
                        />
                        <br></br>               
                        <Button
                            type="submit"
                        >Create Fighter</Button>
                    </ol>
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => ({
//     addFighter: formData => dispatch({ type: 'ADD_FIGHTER', payload: formData })
// });

const mapStateToProps = state => {
    return {
        fighters: state.newFighterForm
    }
};

// export default connect(mapDispatchToProps)(NewFighterForm)
export default connect(mapStateToProps, { updateNewFighterForm })(NewFighterForm)