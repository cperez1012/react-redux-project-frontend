import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ListCard = ({ list }) =>  {

    console.log(list)
    console.log(list.attributes.fighters)

    debugger
    return (
        <div>
            <h1>{list.attributes.title}</h1>
            <Link to={`/lists/${list.id}/edit`}>Edit This List Name</Link>
            <ol>{list.attributes.fighters.map(fighter =>
                <li>
                   <p>{fighter.name}</p>
                   <p>{fighter.alias}</p>
                   <p>{fighter.nationality}</p>
                   <p>{fighter.division}</p>
                   <p>{fighter.stance}</p>
                   <p>{fighter.height}</p>
                   <p>{fighter.reach}</p>
                   <p>{fighter.status}</p>
                   <p>{fighter.champion}</p>
                   <p>{fighter.win}</p>
                   <p>{fighter.loss}</p>
                   <p>{fighter.draw}</p>
                   <p>{fighter.ko}</p>

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