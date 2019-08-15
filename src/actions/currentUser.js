
//synchronous action creators
export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// async action creators
export const login = (credentials) => {
    // debugger
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(credentials)
    }).then(res => res.json())
      .then(user => {
        if(user.error) {
            alert(user.error)
        } else {
            dispatch(setCurrentUser(user))
        }
    }).catch(console.log)
  }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"    
      
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/get_current_user', {
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
            dispatch(setCurrentUser(user))
        }
    }).catch(console.log)
  }
}