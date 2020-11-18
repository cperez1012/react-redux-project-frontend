import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Fighters = ({ fighters }) => {

    const fighterCards = fighters.map((fighter) =>
  
            <li key={fighter.id}>
                <label>Name: <br></br></label>
                <Link to={`/fighters/${fighter.id}`}>
                {fighter.attributes.name}
                </Link>
                <br></br>
                <label>Alias: </label><p>{fighter.attributes.alias}</p>
                <label>Nationality: </label><p>{fighter.attributes.nationality}</p>
                <label>Division: </label><p>{fighter.attributes.division}</p>
                <label>Fighting Stance: </label><p>{fighter.attributes.stance}</p>
                <label>Height: </label><p>{fighter.attributes.height}</p>
                <label>Reach: </label><p>{fighter.attributes.reach}</p>
                <label>Status: </label><p>{fighter.attributes.status}</p>
                <label>Are they a current champion? </label><p>{fighter.attributes.champion}</p>
                <label>Fighter's Record</label><br></br>
                <label>W: </label><p>{fighter.attributes.win}</p>
                <label>L: </label><p>{fighter.attributes.loss}</p>
                <label>D: </label><p>{fighter.attributes.draw}</p>
                <label>KO: </label><p>{fighter.attributes.ko}</p>
                <label>List: </label><p>{fighter.attributes.list.title}</p>

            </li>)

    return (
        fighterCards
    )
}

const mapStateToProps = (state) => {
    return {
        fighters: state.fighters
    }
}


export default connect(mapStateToProps)(Fighters);