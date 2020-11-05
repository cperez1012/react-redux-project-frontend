import React from 'react';
import { connect } from 'react-redux';

const Fighters = props => {

    const fighterCard = props.fighters.length > 0 ?

        props.fighters.map(f =>

        (<ul>
            <li>
            {f.attributes.name}
            </li>
        </ul>))

        :

        null 

        return (
            fighterCard
        )
}
    
const mapStateToProps = state => {
    return {
        fighters: state.fighters
    }
}

export default connect(mapStateToProps)(Fighters);