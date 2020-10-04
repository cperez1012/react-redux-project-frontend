// export default (state = [], action) => {
//     switch (action.type) {
//         case "SET_MY_LISTS":
//             return action.lists
//         default:
//             return state
//     }
// }
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_LISTS":
            return action.lists
        case "CLEAR_LISTS":
            return initialState
        default:
            return state
    }
}