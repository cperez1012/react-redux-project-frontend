import React from 'react';
// import Login from './Login.js';
// import Signup from './Signup.js';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <span>
            <Link to="/signup">Sign Up </Link>
            or
            <Link to="/login"> Log In</Link>
            <h1>WELCOME TO THE BOXING FAN APP</h1>
            <p>This application let's you create all the interesting fun lists you have regarding your favorite/least favorite fighters that are actively fighter or not!</p>
        </span>
    </div>
);

export default Home;