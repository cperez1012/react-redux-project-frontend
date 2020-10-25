import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FighterCard = ({ fighter }) =>  {
    debugger
    console.log(fighter)

    debugger

    const mappedFighters = fighters.data.map(f => f)
    // const mappedFighters = list
    // debugger
    return (
        <div>
            <h1>{f.attributes.name}</h1>
            <ol>
                {fighters.map(f =>
                <li key={f.id}>{f.attributes.name}</li>
                )}
             </ol>
            <Link to={`/fighters/${fighter.id}/edit`}>Edit This List Name</Link>
        </div>    
    )
}
// const mapStateToProps = state => {
//     return {
//         lists: state.myLists,
//         fighters: state.myFighters
//     }
// }

// export default connect(mapStateToProps)(ListCard);
export default FighterCard;