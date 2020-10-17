import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ListCard = ({ list }) =>  {
    // debugger
    console.log(list)

    // const Fighters = ({ fighter }) => {
    //     console.log(fighter)
    debugger
    return (
        // list ?
        <div>
            <h1>{list.attributes.title}</h1>
            <p>{list.relationships.fighters.data.map(({fighter}) => fighter)}</p>
            <Link to={`/lists/${list.id}/edit`}>Edit This List Name</Link>
        </div> 
        // : (
        // <p>This List Card has no lists!</p>
        // )   
    )
}

// const mapStateToProps = (state) => {
//     return {
//       list: state
//     }
// }

// export default connect(mapStateToProps)(ListCard);

export default ListCard;
