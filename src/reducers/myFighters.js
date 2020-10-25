// export default (state = [], action) => {
//     switch (action.type) {
//         case "SET_MY_LISTS":
//             return action.lists
//         default:
//             return state
//     }
// }
const fighterState = []

export default (state = fighterState, action) => {
    switch (action.type) {
        case "SET_MY_FIGHTERS":
            debugger
            return action.fighters
        case "ADD_FIGHTERS":
            return state.concat(action.fighter)
        case "UPDATE_FIGHTER":
            return state.map(fighter => fighter.id === action.fighter.id ? action.fighter : fighter)
        case "DELETE_FIGHTER":
            return state.filter(fighter => fighter.id === action.fighterId ? false : true)
        case "CLEAR_FIGHTERS":
            return fighterState
        default:
            return state
    }
}