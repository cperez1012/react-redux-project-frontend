import { resetFighterForm } from './newFighterForm.js';
//synchronous actions

export const setFighters = fighters => {

    return {
        type: "SET_FIGHTERS",
        fighters
    }
}

export const addFighter = fighter => {
    return {
        type: "ADD_FIGHTERS",
        fighter
    }
}

export const updateFighterSuccess = fighter => {
    return {
        type: "UPDATE_FIGHTER",
        fighter
    }
}

export const deleteFighterSuccess = fighterId => {
    return {
        type: "DELETE_FIGHTER",
        fighterId
    }
}

//asynchronous actions
export const getFighters = () => {
    return dispatch => {

        return fetch(`http://localhost:3001/api/v1/users/:userId/fighters`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    console.log(response.data)
                    
                    dispatch(setFighters(response.data))
                }
            })
            .catch(console.log)    
    }
}

export const clearFighters = () => {
    return {
        type: "CLEAR_FIGHTERS"
    }
}

export const createFighter = ( history ) => {


    return (dispatch, getState) => {

        const remitFighterData = getState().newFighterForm


    return fetch( `http://localhost:3001/api/v1/users/:userId/fighters`, {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(remitFighterData)
    })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error) 
            } else {
                dispatch(addFighter(response.data))
                history.push(`/fighters/${response.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const updateFighter = ( fighterData, history ) => {

    return (dispatch, getState) => {
        
        const remitFighterData = getState().newFighterForm

        return fetch( `http://localhost:3001/api/v1/users/:userId/fighters/${fighterData.fighterId}`,{
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(remitFighterData)
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(updateFighterSuccess(response.data))
                    dispatch(resetFighterForm())
                    history.push(`/fighters/${response.data.id}`)
                }
            })
            .catch(console.log)
    }
}

export const deleteFighter = ( fighterId, history ) => {
    return dispatch => {
        return fetch( `http://localhost:3001/api/v1/users/:userId/fighters/${fighterId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(deleteFighterSuccess(fighterId))
                    dispatch(resetFighterForm())
                    history.push(`/fighters`)
                }
            })
            .catch(console.log)
    }
}