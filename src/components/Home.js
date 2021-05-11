import React from 'react';
// import Button from 'react-bootstrap/esm/Button';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
            <br></br>
            <br></br>
            <h1>WELCOME TO THE BOXING FAN APP</h1>
            <Link exact activeStyle= {{textDecoration:'underline'}} to="/signup">
                <Button  variant="contained" color="secondary">
                    Click To Signup
                </Button>    
            </Link>
            {" or "}
            <Link exact activestyle= {{textDecoration:'underline'}} to="/login"> 
                <Button variant="contained" color="secondary">
                    Click To Login
                </Button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <p>This app let's you create all the interesting fun lists you have regarding your favorite/least favorite fighters that are actively fighter or not!</p>
            <br></br>
            <p>Signup or Login to create all your unique lists and add as many fighters as you would like!</p>
    </div>
);

export default Home;