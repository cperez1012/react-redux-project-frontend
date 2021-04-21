import React from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Fighters = ({ fighters }) => {

    const fighterCards = fighters.map((fighter) =>
        <Card raised className="Fighter-cards">
            <li key={fighter.id}>
                <label>Ranking: {" "}</label>{" "}{fighter.attributes.ranking}<br></br>
                <label>Name: <br></br></label>{"  "}
                <Link to={`/fighters/${fighter.id}`}>
                    {fighter.attributes.name}
                </Link>
                <br></br>
                <img
                        src={fighter.attributes.imageurl} 
                        alt="Fighter Pic"
                        style={{ width: 100, height: 100 }}
                    /><br></br>
                <label>Alias:{"  "}</label>{" "}{fighter.attributes.alias}<br></br>
                <label>Nationality:{"  "}</label>{" "}{fighter.attributes.nationality}<br></br>
                <label>Division:{"  "}</label>{" "}{fighter.attributes.division}<br></br>
                <label>Fighting Stance:{"  "}</label>{" "}{fighter.attributes.stance}<br></br>
                <label>Height:{"  "}</label>{" "}{fighter.attributes.height}<br></br>
                <label>Reach:{"  "}</label>{" "}{fighter.attributes.reach}<br></br>
                <label>Status:{"  "}</label>{" "}{fighter.attributes.status}<br></br>
                <label>Are they a current champion?{"  "}</label>{fighter.attributes.champion ? "Yes" : "No"}<br></br>
                <label>Fighter's Record</label><br></br>
                <label>W:{"  "}</label>{" "}{fighter.attributes.win}{"  "}
                <label>L:{"  "}</label>{" "}{fighter.attributes.loss}{"  "}
                <label>D:{"  "}</label>{" "}{fighter.attributes.draw}{"  "}
                <label>KO:{"  "}</label>{" "}{fighter.attributes.ko}{"  "}<br></br>
                <label>List:{"  "}</label>{" "}{fighter.attributes.list.title}{"  "}
            </li>
        </Card>)

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