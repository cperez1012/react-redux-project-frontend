import React from 'react';
import NewFighterForm from './NewFighterForm.js';
import { updateFighter, deleteFighter } from '../actions/fighters.js';
import { setFighterDataForEdit, resetFighterForm } from '../actions/newFighterForm.js';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class EditFighterFormWrapper extends React.Component {
    componentDidMount() {
        this.props.fighter && this.props.setFighterDataForEdit(this.props.fighter)
    }

    componentDidUpdate(prevProps) {
        this.props.fighter && !prevProps.fighter && this.props.setFighterDataForEdit(this.props.fighter)
    }

    componentWillMount() {
        this.props.resetFighterForm()
    }

    handleSubmit = (formData) => {
        const { updateFighter, fighter, history } = this.props

        updateFighter({
            ...formData,
            fighterId: fighter.id,
            listId: fighter.attributes.list.id
        }, history)

    }

    render() {
        const { history, deleteFighter, fighter } = this.props
        const fighterId = fighter ? fighter.id : null
        return <>
            <NewFighterForm editMode handleSubmit={this.handleSubmit} />
            <br/>
            <Button variant="contained" color="secondary" onClick={() => deleteFighter(fighterId, history)}>Delete this Fighter</Button>
            </>
    }
}

export default connect(null, { updateFighter, setFighterDataForEdit, resetFighterForm, deleteFighter })(EditFighterFormWrapper);