// sync action
export const updateNewListForm = (name, value) => {
    // console.log(name, value)
    const formData = { name, value }
    // debugger
    return {
        type: "UPDATE_NEW_LIST_FORM",
        formData
    }
}

export const resetListForm = () => {
    return {
        type: "RESET_NEW_LIST_FORM",
    }
}

export const setFormDataForEdit = list => {
    // debugger
    const listFormData = {
        title:  list.attributes.title
    }
    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        listFormData
    }
}