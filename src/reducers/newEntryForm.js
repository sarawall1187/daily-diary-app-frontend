const initialState = {
    todaysEntry: '',
    tomorrowsGoal: '',
    foodLog: ''
}

export default (state = initialState, action) => {

    switch(action.type){
        case "UPDATE_NEW_ENTRY_FORM":
            return{
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_ENTRY_FORM":
            return initialState
        default:
            return state;
    } 
}
