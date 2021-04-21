import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button} from '@material-ui/core';

const MyLists = ({ lists }) => {
   
    const listCards = lists.length > 0 ? 
    
    lists.map(list => (
            <ol  key={list.id}>
                <li>
                    <Link to={`/lists/${list.id}`}>
                        <Button variant="contained" color="secondary">
                        {list.attributes.title}
                        </Button>
                    </Link>
                </li>
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