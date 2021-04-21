import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
// import { useSelector } from 'react-redux';

const ListCard = ({ list }) =>  {
// const ListCard = () => {

//     let list = useSelector(state => {
//         return state.myLists[1]
//     })
    // debugger
    console.log(list)
    // console.log(list.attributes.fighters)

    return (
        <div>
            <h1>{list.attributes.title}</h1>
            <Link to={`/lists/${list.id}/edit`}>
                <Button variant="contained" color="secondary">
                    Edit This List Name
                </Button>
            </Link>
            <Card raised className="Fighter-cards">
            <ol>{list.attributes.fighters.map(fighter =>
                <li key={fighter.id}>
                    <label>Ranking: </label>{" "}{fighter.ranking}<br></br>                   
                    <label>Name: </label>{" "}{fighter.name}<br></br>
                    <img
                        src={fighter.imageurl} 
                        alt="Fighter Pic"
                        style={{ width: 100 }} 
                    /><br></br>
                    <label>Alias: </label>{" "}{fighter.alias}<br></br>
                    <label>Nationality: </label>{" "}{fighter.nationality}<br></br>
                    <label>Division: </label>{" "}{fighter.division}<br></br>
                    <label>Stance: </label>{" "}{fighter.stance}<br></br>
                    <label>Height: </label>{" "}{fighter.height}<br></br>
                    <label>Reach: </label>{" "}{fighter.reach}<br></br>
                    <label>Status: </label>{" "}{fighter.status}<br></br>                   
                    <label>Are they a champion? </label>{fighter.champion ? "Yes" : "No"}<br></br>
                    <label>W: </label>{" "}{fighter.win}<br></br>
                    <label>L: </label>{" "}{fighter.loss}<br></br>
                    <label>D: </label>{" "}{fighter.draw}<br></br>
                    <label>KO: </label>{" "}{fighter.ko}<br></br>

                </li> 
            )}</ol>
            </Card>
        </div>    
    )
}

const mapStateToProps = state => {
    return {
        lists: state.myLists
    }
}

export default connect(mapStateToProps)(ListCard);

// export default ListCard