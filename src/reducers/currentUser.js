export default (state = {}, action) => {

    switch(action.type){
        case "SET_CURRENT_USER":
            return action.payload
        
        default:
            return state;
    } 
}

