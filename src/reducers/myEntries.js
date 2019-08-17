const initialState = []

export default (state = initialState, action) => {

    switch(action.type){
        case "SET_MY_ENTRIES":
        return action.payload
        case "CLEAR_TRIPS":
        return initialState

        
        default:
            return state;
    } 
}