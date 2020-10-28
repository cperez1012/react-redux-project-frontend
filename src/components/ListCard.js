import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ListCard = ({ list }) =>  {
    debugger
    console.log(list)

    debugger

    // const mappedFighters = list.relationships.fighters.data.map(f => f)
    // const mappedFighters = list
    // debugger
    return (
        <div>
            <h1>{list.attributes.title}</h1>
            {/* <p>{list.relationships.fighters.data.map(f =>
                f.attributes
            )}</p> */}
            <Link to={`/lists/${list.id}/edit`}>Edit This List Name</Link>
        </div>    
    )
}

const mapStateToProps = state => {
    return {
        lists: state.myLists,
        fighters: state.myFighters
    }
}

export default connect(mapStateToProps)(ListCard);
// export default ListCard;