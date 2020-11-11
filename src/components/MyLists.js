import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import MyFighters from './MyFighters';
// import fighters from '../reducers/fighters';
// import Fighters from 'Fighters.js'

const MyLists = ({ lists }) => {
    debugger
    const listCards = lists.length > 0 ? 
    
    lists.map(l => 
        (<div>  
            <ol style={{ listStyleType: "upper-roman" }}>
            <li key={l.id}><Link to={`/lists/${l.id}`}>{l.attributes.title}</Link>
            {MyFighters}
            </li>

            </ol>
        </div>))
   
    :
    null

    return (
        listCards

    )
}

const MyFighters = ({ fighters }) => {
    fighters.map(f =>
        (<div>
            <ol>
                <li key={f.id}>
                    {f.attributes.name}
                </li>
            </ol>
        </div>))
}
const mapStateToProps = state => {
    debugger
    return {
        lists: state.myLists,
        // fighters: state.fighters
    }
}

export default connect(mapStateToProps)(MyLists);