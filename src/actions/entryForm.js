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


export const dataForEditEntryForm = (entry) => {
   const editEntryData = {
        todaysEntry: entry.attributes.todays_entry,
        tomorrowsGoal: entry.attributes.tomorrows_goal,
        foodLog: entry.attributes.food_log
    }
    return {
        type: "DATA_FOR_EDIT_ENTRY_FORM",
        editEntryData
    }
}