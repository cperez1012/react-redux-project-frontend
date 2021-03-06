import { resetListForm } from './newListForm.js'

//synchronous actions

export const setMyLists = lists => {

    return {
        type: "SET_MY_LISTS",
        lists
    }
}

export const addList = list => {
    return {
        type: "ADD_LISTS",
        list
    }
}

export const updateListSuccess = list => {
    return {
        type: "UPDATE_LIST",
        list
    }
}

export const deleteListSuccess = listId => {
    return {
        type: "DELETE_LIST",
        listId
    }
}

//asynchronous actions
export const getMyLists = () => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users/:userId/lists`, {
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
                    console.log(response)
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

export const createList = ( listData, history ) => {
    return dispatch => {
        const remitListData = {
            title: listData.title
        }

    return fetch(`http://localhost:3001/api/v1/users/:userId/lists`, {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(remitListData)
    })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error) 
                } else {
                    dispatch(addList(response.data))
                    dispatch(resetListForm())
                    history.push(`/lists/${response.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const updateList = ( listData, history ) => {
    return dispatch => {

        const remitListData = {
            title: listData.title
        }

        return fetch(`http://localhost:3001/api/v1/users/:userId/lists/${listData.listId}`,{
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(remitListData)
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(updateListSuccess(response.data))
                    history.push(`/lists/${response.data.id}`)
                }
            })
            .catch(console.log)
    }
}

export const deleteList = ( listId, history ) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users/:userId/lists/${listId}`, {
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
                    dispatch(deleteListSuccess(listId))
                    history.push(`/lists`)
                }
            })
            .catch(console.log)
    }
}