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
    ko: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_FIGHTER_FORM":
            return action.formData
        case "RESET_FIGHTER_FORM":
            return initialState
        default:
            return state
    }

}