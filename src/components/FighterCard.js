import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FighterCard = ({ fighter }) =>  {

    console.log(fighter)
    debugger
    return (
        <div>
            <h1>{fighter.attributes.name}</h1>
            <Link to={`/fighters/${fighter.id}/edit`}>Edit This Fighter's Name</Link>
        </div>    
    )
}

const mapStateToProps = state => {
    return {
        fighters: state.fighters
    }
}

export default connect(mapStateToProps)(FighterCard);