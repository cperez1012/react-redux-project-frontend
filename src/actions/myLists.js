import { setCurrentUser } from './currentUser.js'
import { resetListForm } from './newListForm.js'

//synchronous actions

export const setMyLists = lists => {

    // debugger
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
export const getMyLists = (userId) => {
    return dispatch => {
        // debugger
        // return fetch(`http://localhost:3001/api/v1/users/${user.id}/lists`, {
            // debugger
        return fetch(`http://localhost:3001/api/v1/users/${userId}/lists`, {
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
                    // debugger
                    // dispatch(setCurrentUser(response.data))
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

export const createList = ( listData, history, userId) => {
    // debugger
    return dispatch => {
        const remitListData = {
            title: listData.title
        }

    // return fetch(`http://localhost:3001/api/v1/users/${user.id}/lists`, {
    return fetch( `http://localhost:3001/api/v1/users/${userId}/lists`, {
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
                    // dispatch(setCurrentUser(response.data))
                    // debugger
                    dispatch(addList(response.data))
                    dispatch(resetListForm())
                    history.push(`/lists/${response.data.id}`)
            }
        })
        // .then(console.log)
        .catch(console.log)
    }
}

export const updateList = ( listData, history, userId) => {
    // debugger
    return dispatch => {

        debugger
        const remitListData = {
            title: listData.title
        }

        debugger
        return fetch( `http://localhost:3001/api/v1/users/${userId}/lists/${listData.listId}`,{
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
                    // dispatch(setCurrentUser(response.data))
                    dispatch(updateListSuccess(response.data))
                    history.push(`/lists/${response.data.id}`)
                }
            })
            .catch(console.log)
    }
}

export const deleteList = ( listId, history, userId) => {
    return dispatch => {
        return fetch( `http://localhost:3001/api/v1/users/${userId}/lists/${listId}`, {
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
                    dispatch(setCurrentUser(response.data))
                    dispatch(deleteListSuccess(listId))
                    history.push(`/lists`)
                }
            })
            .catch(console.log)
    }
}