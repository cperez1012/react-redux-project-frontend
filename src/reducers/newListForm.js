const initialState = {
    title: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_LIST_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            // debugger
        return returnVal
        case "RESET_NEW_LIST_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            return action.listFormData
        default:
            return state
    }
}