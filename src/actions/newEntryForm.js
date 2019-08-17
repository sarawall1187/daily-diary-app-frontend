export const updateNewEntryForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_ENTRY_FORM", 
        formData
    }
}

export const resetNewEntryForm = () => {
    return {
        type: "RESET_NEW_ENTRY_FORM"
    }
}