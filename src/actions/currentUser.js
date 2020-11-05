import { resetLoginForm } from './loginForm.js';
import { getMyLists, clearLists } from './myLists.js';
import { setFighters } from './fighters.js'
import { resetSignupForm } from './signupForm.js';

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
export const login  = (credentials, history) => {
    debugger
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
            .then(resp => resp.json())
            .then(response => {
                if (response.error){
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(getMyLists())
                    dispatch(setFighters())
                    dispatch(resetLoginForm())
                    history.push('/')
                }
            })
            .catch(console.log)
    }
}

export const logout = event => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        dispatch(clearLists())
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
            .then(resp => resp.json())
            .then(response => {
                if (response.error){
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    const userId = response.data.id
                    dispatch(getMyLists(userId))
                }
            })
            .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(response => {
             if (response.error) {
                alert(response.error)    
             } else {
                 dispatch(setCurrentUser(response.data))
                 dispatch(getMyLists())
                 dispatch(resetSignupForm())
                 history.push('/')
             }
        })
        .catch(console.log)
    }
}