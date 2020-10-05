//synchronous actions

export const setMyLists = lists => {
    return {
        type: "SET_MY_LISTS",
        lists
    }
}

export const addList = list => {
    return {
        type: "ADD_LIST",
        list
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

export const clearLists = () => {
    return {
        type: "CLEAR_LISTS"
    }
}

export const createList = (listData) => {
    return dispatch => {
        const remitListData = {
            title: listData.title
        }

    return fetch("http://localhost:3001/api/v1/lists", {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(remitListData)
    })
        .then(response => response.json())
        .then(console.log)
        .catch(console.log)
    }
}