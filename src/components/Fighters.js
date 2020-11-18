import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Fighters = ({ fighters }) => {

    const fighterCards = fighters.map(f =>
        <ol>
            <li key={f.id}>
                <label>Name: <br></br></label>
                <Link to={`/fighters/${f.id}`}>
                {f.attributes.name}
                </Link>
                <br></br>
                <label>Alias: </label><p>{f.attributes.alias}</p>
                <label>Nationality: </label><p>{f.attributes.nationality}</p>
                <label>Division: </label><p>{f.attributes.division}</p>
                <label>Fighting Stance: </label><p>{f.attributes.stance}</p>
                <label>Height: </label><p>{f.attributes.height}</p>
                <label>Reach: </label><p>{f.attributes.reach}</p>
                <label>Status: </label><p>{f.attributes.status}</p>
                <label>Are they a current champion? </label><p>{f.attributes.champion}</p>
                <label>Fighter's Record</label><br></br>
                <label>W: </label><p>{f.attributes.win}</p>
                <label>L: </label><p>{f.attributes.loss}</p>
                <label>D: </label><p>{f.attributes.draw}</p>
                <label>KO: </label><p>{f.attributes.ko}</p>
                <label>List: </label><p>{f.attributes.list.title}</p>

            </li>
        </ol>)

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