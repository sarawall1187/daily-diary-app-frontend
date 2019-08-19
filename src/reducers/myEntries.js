const initialState = []

export default (state = initialState, action) => {

    switch(action.type){
        case "SET_MY_ENTRIES":
        return action.entries

        case "ADD_ENTRY":
        return state.concat(action.entry)

        case "CLEAR_TRIPS":
        return initialState

        
        default:
            return state;
    } 
}