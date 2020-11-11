import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ListCard = ({ list }) =>  {

    console.log(list)
    debugger
    return (
        <div>
            <h1>{list.attributes.title}</h1>
            <Link to={`/lists/${list.id}/edit`}>Edit This List Name</Link>
        </div>    
    )
}

const mapStateToProps = state => {
    return {
        lists: state.myLists
    }
}

export default connect(mapStateToProps)(ListCard);