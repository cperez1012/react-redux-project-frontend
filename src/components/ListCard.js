import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import fighters from '../reducers/fighters';
// import fighters from '../reducers/fighters';

const ListCard = ({ list }) =>  {

    console.log(list)
    console.log(list.attributes.fighters)

    // const boxer = list.attributes.fighters.map(fighter => 
    //     (fighter.attributes.name))
    debugger
    return (
        <div>
            <h1>{list.attributes.title}</h1>
            <Link to={`/lists/${list.id}/edit`}>Edit This List Name</Link>
            <ol>{list.attributes.fighters.map(fighter =>
                <li>
                   <p>{fighter.name}</p>
                   <p>{fighter.alias}</p>
                </li> 
            )}</ol>
        </div>    
    )
}

const mapStateToProps = state => {
    return {
        lists: state.myLists
    }
}

export default connect(mapStateToProps)(ListCard);