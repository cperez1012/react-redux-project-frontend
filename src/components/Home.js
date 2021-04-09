import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <span>
            <br></br>
            <br></br>
            <h1>WELCOME TO THE BOXING FAN APP</h1>
            <Link to="/signup">
                <Button>
                    Signup
                </Button>    
            </Link>
            {" or "}
            <Link to="/login"> 
                <Button>
                    Login
                </Button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <p>This app let's you create all the interesting fun lists you have regarding your favorite/least favorite fighters that are actively fighter or not!</p>
            <br></br>
        </span>
    </div>
);

export default Home;