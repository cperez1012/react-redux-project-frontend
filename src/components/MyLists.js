import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card } from '@material-ui/core';

const MyLists = ({ lists }) => {
   
    const listCards = lists.length > 0 ? 
    
    lists.map(list => 
        (<Card>
            <ol  key={list.id} style={{ listStyleType: "upper-roman" }}>
                <li>
                    <Link to={`/lists/${list.id}`}>
                        <Button variant="contained" color="secondary">
                        {list.attributes.title}
                        </Button>
                    </Link>
                </li>
            </ol>
        </Card>
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