const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_LISTS":
            debugger
            return action.lists
        case "ADD_LISTS":
            return state.concat(action.list)
        case "UPDATE_LIST":
            return state.map(list => list.id === action.list.id ? action.list : list)
        case "DELETE_LIST":
            return state.filter(list => list.id === action.listId ? false : true)
        case "CLEAR_LISTS":
            return initialState
        default:
            return state
    }
}
