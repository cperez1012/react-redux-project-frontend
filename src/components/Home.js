import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <span>
            <br></br>
            <Link to="/signup">Sign Up </Link>
            <br></br>
            or
            <br></br>
            <Link to="/login"> Log In</Link>
            <br></br>
            <br></br>
            <h1>WELCOME TO THE BOXING FAN APP</h1>
            <br></br>
            <p>This application let's you create all the interesting fun lists you have regarding your favorite/least favorite fighters that are actively fighter or not!</p>
            <br></br>
        </span>
    </div>
);

export default Home;