export const updateNewEntryForm = (name, value) => {
    return {
        type: "UPDATE_NEW_ENTRY_FORM", 
        formData: {name, value}
    }
}

export const resetNewEntryForm = () => {
    return {
        type: "RESET_NEW_ENTRY_FORM"
    }
}