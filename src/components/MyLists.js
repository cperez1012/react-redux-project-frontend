import React from 'react';
// import ListCard from './ListCard.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyLists = props => {
    // debugger
    const listCards = props.lists.length > 0 ?
    
props.lists.map(l => (<p key={l.id}><Link to={`/lists/${l.id}`}>{l.attributes.title}</Link></p>)) :
        null
// debugger
    return (
        listCards
    )
}

// const MyLists = ({ match }) => (
//     <div>
//         <Route path={match.url + "/lists"} component={MyLists}/>
//     </div>
// )

const mapStateToProps = state => {
    return {
        lists: state.myLists
    }
}

export default connect(mapStateToProps)(MyLists);