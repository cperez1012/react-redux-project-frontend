/* eslint-disable import/no-anonymous-default-export */
const initialState = []

export default (state = initialState, action) => {  
    switch (action.type) {
        case "SET_FIGHTERS":
           return action.fighters
        case "ADD_FIGHTERS":
            return state.concat(action.fighter)
        case "UPDATE_FIGHTER":
            return state.map(fighter => fighter.id === action.fighter.id ? action.fighter : fighter)
        case "DELETE_FIGHTER":
            return state.filter(fighter => fighter.id === action.fighterId ? false : true)
        case "CLEAR_FIGHTER":
            return initialState
    default:
          return state  
    }
}