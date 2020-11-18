import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyLists = ({ lists }) => {
   
    const listCards = lists.length > 0 ? 
    
    lists.map(l => 
        (<div>  
            <ol style={{ listStyleType: "upper-roman" }}>
                <ul key={l.id}>
                    <Link to={`/lists/${l.id}`}>
                    <p>{l.attributes.title}</p>
                    </Link>
                </ul>
            </ol>
        </div>))
   
    :
    null

    return (
        listCards

    )
}

const mapStateToProps = state => {
    debugger
    return {
        lists: state.myLists
    }
}

export default connect(mapStateToProps)(MyLists);