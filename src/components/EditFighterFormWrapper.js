import React from 'react';
import NewFighterForm from './NewFighterForm.js';
import { deleteFighter, updateFighter } from '../actions/fighters.js';
import { setFormDataForEdit, resetFighterForm } from '../actions/newFighterForm.js';
import { connect } from 'react-redux';

class EditFighterFormWrapper extends React.Component {
    componentDidMount() {
        this.props.fighter && this.props.setFormDataForEdit(this.props.fighter)
    }

    componentDidUpdate(prevProps) {
        this.props.fighter && !prevProps.fighter && this.props.setFormDataForEdit(this.props.fighter)
    }

    componentWillMount() {
        this.props.resetFighterForm()
    }

    handleSubmit = (formData) => {
        const { updateFighter, fighter, history } = this.props
        debugger
        updateFighter({
            ...formData,
            fighterId: fighter.id
        }, history)
    }

    render() {
        const { history, deleteFighter, fighter } = this.props
        const fighterId = fighter ? fighter.id : null
        return <>
            <NewFighterForm editMode handleSubmit={this.handleSubmit} />
            <br/>
            <button style={{color: "red"}} onClick={() => deleteFighter(fighterId, history)}>Delete this Fighter</button>
            </>
    }
}

export default connect(null, { updateFighter, setFormDataForEdit, resetFighterForm, deleteFighter })(EditFighterFormWrapper);