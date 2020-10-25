import React from 'react';
// import ListCard from './ListCard.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// debugger
const MyLists = props => {
    debugger
    const listCards = props.lists.length > 0 ?
    
props.lists.map(l =>
    (<ul> 
<li key={l.id}><Link to={`/lists/${l.id}`}>{l.attributes.title}</Link>
</li>

{/* <ol>
    {l.relaionships.fighters.data.included.map(f => 
        (<li key={f.id}><Link to={`/fighters/${f.id}`}>
            {f.attributes.name}
        </Link>
 
        </li>)
        )}
</ol> */}
</ul>)) 
// && props.lists.relationships.map(f => (
// <li key={f.id}>{f.attributes.name}</li>)) 
:
        null

    // const fighterCards = props.fighters.map(f => (<p>{f.attributes.name}</p>))
debugger
    return (
        listCards
        // ,
        // fighterCards
    )
}

const mapStateToProps = state => {
    return {
        lists: state.myLists
        ,
        fighters: state.myFighters
    }
}

export default connect(mapStateToProps)(MyLists);