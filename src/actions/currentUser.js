
//synchronous action creators
export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}

// async action creators
export const login = (credentials) => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username: "sarawall1187", password: 'password'})
    })
  }
}