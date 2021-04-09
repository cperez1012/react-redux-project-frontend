/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    username: "",
    email: "",
    password: "",
    imageurl: "",
    bio: "",
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initialState
        default:
            return state
    }
}