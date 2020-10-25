import React from 'react';
// import ListCard from './ListCard.js';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

debugger
const MyFighters = props => {
    debugger
    const fighterCards = props.fighters.length > 0 ?
    
props.fighters.map(f => (<p key={f.id}>{f.attributes.name}
<br></br>
ALIAS: {f.attributes.alias},<br></br>
CHAMPION: {f.attributes.champion},<br></br>
NATIONALITY: {f.attributes.nationality},<br></br>
DIVISION: {f.attributes.division},<br></br>,
STATUS: {f.attributes.status},<br></br>
STANCE: {f.attributes.stance}
</p>)) :
    null
    return (
        fighterCards
    )
}

const mapStateToProps = state => {
    return {
        fighters: state.myFighters
    }
}

export default connect(mapStateToProps)(MyFighters);