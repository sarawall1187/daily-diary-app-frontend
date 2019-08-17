
//synchronous action creators
export const setMyEntries = (entries) => {
    return {
        type: "SET_MY_ENTRIES",
        payload: entries
    }
}

export const clearEntries = () => {
    return {
        type: "CLEAR_ENTRIES"
    }

}

//asynchronous action creators
export const getMyEntries = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/entries', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
    }).then(res => res.json())
    .then(entry => {
        if(entry.error) {
            alert(entry.error)
        } else {
            dispatch(setMyEntries(entry.data))
        }
    }).catch(console.log)
  }
}