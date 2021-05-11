import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import stickman from '../image/LogoMakr-1Fadtm.png'

const FighterCard = ({ fighter }) =>  {

    console.log(fighter)

    return (
        <div>
            <Link exact activeStyle= {{textDecoration:'underline'}} to={`/fighters/${fighter.id}/edit`}>
                <Button variant="contained" color="secondary">
                    Edit This Fighter
                </Button>
            </Link>
            <Card raised className="Fighter-cards">
                <li key={fighter.id} className="stickman" style={{ backgroundImage: `url(${stickman})`, backgroundRepeat:'no-repeat' }}>
                    <label>Ranking: {" "}</label>{" "}{fighter.attributes.ranking}<br></br>
                    <label>Name:{"  "}</label>{"  "}{fighter.attributes.name}{"  "}<br></br>
                    <img
                        src={fighter.attributes.imageurl} 
                        alt="Fighter Pic"
                        style={{ width: 100, height: 100 }}
                    /><br></br>
                    <label>Alias:{"  "}</label>{"  "}{fighter.attributes.alias}<br></br>
                    <label>Nationality:{"  "}</label>{"  "}{fighter.attributes.nationality}<br></br>
                    <label>Division:{"  "}</label>{"  "}{fighter.attributes.division}<br></br>
                    <label>Fighting Stance:{"  "}</label>{"  "}{fighter.attributes.stance}<br></br>
                    <label>Height:{"  "}</label>{"  "}{fighter.attributes.height}<br></br>
                    <label>Reach:{"  "}</label>{"  "}{fighter.attributes.reach}<br></br>
                    <label>Status:{"  "}</label>{"  "}{fighter.attributes.status}<br></br>
                    <label>Are they a current champion?{"  "}</label>{"  "}{fighter.attributes.champion ? "Yes" : "No"}<br></br>
                    <label>Fighter's Record</label><br></br>
                    <label>W:{"  "}</label>{"  "}{fighter.attributes.win}{"  "}
                    <label>L:{"  "}</label>{"  "}{fighter.attributes.loss}{"  "}
                    <label>D:{"  "}</label>{"  "}{fighter.attributes.draw}{"  "}
                    <label>KO:{"  "}</label>{"  "}{fighter.attributes.ko}{"  "}<br></br>
                    <label>List:{"  "}</label>{"  "}{fighter.attributes.list.title}{"  "}
                </li>
            </Card>
        </div>    

    ) 
}

export default connect(null) (FighterCard);