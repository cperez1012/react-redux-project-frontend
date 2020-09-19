// synchronous action creator

// function that takes user as an object
export const currentUser = user => {
    // returning an action which is an object data structure
    // for synchronous action creators you return plain Javascript objects
    return {
        type:"SET_CURRENT_USER",
        payload: user

    }
}

// asynchronous action creator
// allows us to use dispatch
export const login  = credentials => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "cperez", password: "1234"})
        })
    }
}
 