// import { useRouteMatch } from 'react-router-dom'
// import { setCurrentUser } from './currentUser.js'
// import { resetListForm } from './newListForm.js'

//synchronous actions

export const setFighters = fighters => {

    debugger
    return {
        type: "SET_FIGHTERS",
        fighters
    }
}

export const addFighter = fighter => {
    return {
        type: "ADD_FIGHTER",
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
        debugger

        return fetch(`http://localhost:3001/api/v1/fighters`, {
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
                    debugger
                    
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

export const createFighter = ( fighterData, history ) => {
    // debugger
    return dispatch => {
        const remitFighterData = {
            name: fighterData.name
        }

    return fetch( `http://localhost:3001/api/v1/fighters`, {
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
                    // dispatch(setCurrentUser(response.data))
                    // debugger
                    dispatch(addFighter(response.data))
                    // dispatch(resetListForm())
                    history.push(`/fighters/${response.data.id}`)
            }
        })
        // .then(console.log)
        .catch(console.log)
    }
}

export const updateFighter = ( fighterData, history ) => {
    // debugger
    return dispatch => {

        // debugger
        const remitFighterData = {
            name: fighterData.name
        }

        debugger
        return fetch( `http://localhost:3001/api/v1/fighters/${fighterData.fighterId}`,{
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
                    // dispatch(setCurrentUser(response.data))
                    dispatch(updateFighterSuccess(response.data))
                    history.push(`/fighters/${response.data.id}`)
                }
            })
            .catch(console.log)
    }
}

export const deleteFighter = ( fighterId, history ) => {
    return dispatch => {
        return fetch( `http://localhost:3001/api/v1/fighters/${fighterId}`, {
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
                    // dispatch(setCurrentUser(response.data))
                    dispatch(deleteFighterSuccess(response.data))
                    history.push(`/fighters`)
                }
            })
            .catch(console.log)
    }
}