const initialState = []

export default (state = initialState, action) => {

    switch(action.type){
        case "SET_MY_ENTRIES":
        return action.entries

        case "ADD_ENTRY":
        return state.concat(action.entry)

        case "UPDATE_ENTRY":
        return state.map(entry => entry.id === action.entry.id ? action.entry : entry)

        case "DELETE_ENTRY_SUCCESS":
        return state.filter(entry => entry.id === action.entryId ? false : true)

        case "CLEAR_TRIPS":
        return initialState

        
        default:
            return state;
    } 
}