import { resetLoginForm } from './loginForm.js';
import { getMyLists } from './myLists.js';

// synchronous action creator

// function that takes user as an object
export const setCurrentUser = user => {
    // returning an action which is an object data structure
    // for synchronous action creators you return plain Javascript objects
    return {
        type:"SET_CURRENT_USER",
        user

    }
}


export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}
// asynchronous action creator
// allows us to use dispatch
export const login  = credentials => {
    console.log("credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(response => {
                if (response.error){
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(getMyLists())
                    dispatch(resetLoginForm())
                }
            })
            .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: 'DELETE'    
        })
    }
}

export const getCurrentUser = () => {
    console.log("DISPATCHING GET CURRENT USER")
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error){
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(getMyLists())
                }
            })
            .catch(console.log)
    }
}
 