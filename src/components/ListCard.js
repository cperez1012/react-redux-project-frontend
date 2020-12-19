import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ListCard = ({ list }) =>  {

    console.log(list)
    console.log(list.attributes.fighters)

    return (
        <div>
            <h1>{list.attributes.title}</h1>
            <Link to={`/lists/${list.id}/edit`}>Edit This List Name</Link>
            <ol>{list.attributes.fighters.map(fighter =>
                <li key={fighter.id}>
                    
                    <label>Name: </label>
                    <p>{fighter.name}</p>
                    <label>Alias: </label>
                    <p>{fighter.alias}</p>
                    <label>Nationality: </label>
                    <p>{fighter.nationality}</p>
                    <label>Division: </label>
                    <p>{fighter.division}</p>
                    <label>Stance: </label>
                    <p>{fighter.stance}</p>
                    <label>Height: </label>
                    <p>{fighter.height}</p>
                    <label>Reach: </label>
                    <p>{fighter.reach}</p>
                    <label>Status: </label>
                    <p>{fighter.status}</p>
                    <label>Are they a champion? </label>
                    <p>{fighter.champion ? "Yes" : "No"}</p>
                    <label>W: </label>
                    <p>{fighter.win}</p>
                    <label>L: </label>
                    <p>{fighter.loss}</p>
                    <label>D: </label>
                    <p>{fighter.draw}</p>
                    <label>KO: </label>
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