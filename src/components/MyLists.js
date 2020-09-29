import React from 'react';
import ListCard from './ListCard.js';
import { connect } from 'react-redux';

const MyLists = props => {
    const listCards = props.lists.length > 0 ?
        props.lists.map(l => <ListCard list={l} key={l.id} />) :
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