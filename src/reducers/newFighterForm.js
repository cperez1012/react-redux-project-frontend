const initialState = {
    name: "",
    alias: "",
    nationality: "",
    division: "",
    stance: "",
    height: "",
    reach: "",
    status: "",
    champion: false,
    win: 0,
    loss: 0,
    draw: 0,
    ko: 0,
    listId: 0
}

export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_NEW_FIGHTER_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
        return returnVal
        case "RESET_NEW_FIGHTER_FORM":
            return initialState
        case "SET_FIGHTER_DATA_FOR_EDIT":
            return action.fighterFormData
    default:
        return state
    }
}