import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyLists = props => {
 
    const listCards = props.lists.length > 0 ?
    
    props.lists.map(l =>
    (<ul> 
        <li key={l.id}><Link to={`/lists/${l.id}`}>{l.attributes.title}</Link>
        </li>

    </ul>)) 

    :
    null

    return (
        listCards

    )
}

const mapStateToProps = state => {
    return {
        lists: state.myLists
    }
}

export default connect(mapStateToProps)(MyLists);