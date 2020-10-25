const initialState = {
    name: "",
    alias: "",
    nationality: "",
    division: "",
    stance: "",
    height: "",
    reach: "",
    status: "",
    champion: "",
    win: "",
    loss: "",
    draw: "",
    ko: "",
    listId: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_FIGHTER_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value,
                [action.formData.alias]: action.formData.value,
                [action.formData.nationality]: action.formData.value,
                [action.formData.division]: action.formData.value,
                [action.formData.stance]: action.formData.value,
                [action.formData.height]: action.formData.value,
                [action.formData.reach]: action.formData.value,
                [action.formData.status]: action.formData.value,
                [action.formData.champion]: action.formData.value,
                [action.formData.win]: action.formData.value,
                [action.formData.loss]: action.formData.value,
                [action.formData.draw]: action.formData.value,
                [action.formData.ko]: action.formData.value,
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