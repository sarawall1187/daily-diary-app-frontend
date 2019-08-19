import {resetNewEntryForm} from './newEntryForm.js'
//synchronous action creators
export const setMyEntries = (entries) => {
    return {
        type: "SET_MY_ENTRIES",
         entries
    }
}

export const clearEntries = () => {
    return {
        type: "CLEAR_ENTRIES"
    }

}

export const addEntry = (entry) => {
    
    return {
        type: "ADD_ENTRY",
        entry
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

export const createEntry = (entryData, history) => {
    return dispatch => {
        const sendableEntryData = {
            entry: {
                todays_entry: entryData.formData.todaysEntry,
                tomorrows_goal: entryData.formData.tomorrowsGoal,
                food_log: entryData.formData.foodLog,
                user_id: entryData.userId
            }
        }
        return fetch("http://localhost:3000/api/v1/entries", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
                }, 
                body: JSON.stringify(sendableEntryData)
            })
                .then(r => r.json())
                .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(addEntry(resp.data))
                    dispatch(resetNewEntryForm())
                    // history.push('/')
                    history.push(`/entries/${resp.data.id}`)
                    // go somewhere else --> show?
                    // add the new trip to the store
                 }
                })
                .catch(console.log)
        
    }
}