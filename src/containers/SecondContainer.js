import React from 'react';
import Fighters from '../components/Fighters.js';
import Upvote from '../components/Upvote.js';

const SecondContainer = () => {
    return (
        <div className="SecondContainer">
           <Fighters/>
           <Upvote/>
        </div>
    )
}

export default SecondContainer;