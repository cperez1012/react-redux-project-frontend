const initialState = {
    fighters: []
}

export default (state=initialState, action) => {    
    switch (action.type) {
        case "SET_FIGHTERS":
            debugger
           return action.fighters
    default:
          return state  
    }
}