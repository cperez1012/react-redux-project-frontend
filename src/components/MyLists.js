import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyLists = ({ lists }) => {
   
    const listCards = lists.length > 0 ? 
    
    lists.map(list => 
        ( 
            <ol  key={list.id} style={{ listStyleType: "upper-roman" }}>
                <ul>
                    <Link to={`/lists/${list.id}`}>
                    <p>{list.attributes.title}</p>
                    </Link>
                </ul>
            </ol>
        ))
   
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