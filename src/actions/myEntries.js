
//synchronous action creators
export const setMyEntries = (entries) => {
    return {
        type: "SET_MY_ENTRIES",
        payload: entries
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
    .then(user => {
        if(user.error) {
            alert(user.error)
        } else {
            dispatch(setMyEntries([]))
        }
    }).catch(console.log)
  }
}