export default (state = [], action) => {

    switch(action.type){
        case "SET_MY_ENTRIES":
        return action.payload


        
        default:
            return state;
    } 
}