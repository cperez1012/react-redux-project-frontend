//synchronous actions

export const setMyLists = lists => {
    return {
        type: "SET_MY_LISTS",
        lists
    }
}

//asynchronous actions
export const getMyLists = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/lists", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    console.log(response.data)
                    dispatch(setMyLists(response.data))
                }
            })
            .catch(console.log)    
    }
}