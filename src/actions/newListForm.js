// sync action
export const updateNewListForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_NEW_LIST_FORM",
        formData: { name, value }
    }
}