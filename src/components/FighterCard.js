import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const FighterCard = ({ fighter }) =>  {

    console.log(fighter)

    return (
        <div>
            <h1>{fighter.attributes.name}</h1>
            <ul key={fighter.id}>
            <Link to={`/fighters/${fighter.id}/edit`}>
                <Button>
                    Edit This Fighter
                </Button>
            </Link>
                <li>
                   <label>Alias: </label>
                   <p>{fighter.attributes.alias}</p>
                   <label>Nationality: </label>
                   <p>{fighter.attributes.nationality}</p>
                   <label>Division: </label>
                   <p>{fighter.attributes.division}</p>
                   <label>Stance: </label>
                   <p>{fighter.attributes.stance}</p>
                   <label>Height: </label>
                   <p>{fighter.attributes.height}</p>
                   <label>Reach: </label>
                   <p>{fighter.attributes.reach}</p>
                   <label>Status: </label>
                   <p>{fighter.attributes.status}</p>
                   <label>Are they a current champion? </label>
                   <p>{fighter.attributes.champion ? "Yes" : "No"}</p>
                   <label>Win: </label>
                   <p>{fighter.attributes.win}</p>
                   <label>Loss: </label>
                   <p>{fighter.attributes.loss}</p>
                   <label>Draw: </label>
                   <p>{fighter.attributes.draw}</p>
                   <label>KO: </label>
                   <p>{fighter.attributes.ko}</p>
                   <label>List: </label>
                   <p key={fighter.attributes.list.id}>{fighter.attributes.list.title}</p>
                </li>
            </ul> 
        </div>    
    ) 
}

export default connect(null) (FighterCard);