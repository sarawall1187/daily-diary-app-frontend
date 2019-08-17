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

export const addEntry = (trip) => {
    console.log("inside my addEntry Action Create", trip)
    return {
        type: "ADD_ENTRY",
        trip
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

export const createEntry = (entryData) => {
    return dispatch => {
        const sendableEntryData = {
            entry: {
                todays_entry: entryData.todaysEntry,
                tomorrows_goal: entryData.tomorrowsGoal,
                food_log: entryData.foodLog,
                created_at: entryData.createdAt,
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
                    dispatch(createEntry(resp.data))
                    dispatch(resetNewEntryForm())
                    // history.push(`/entries/${resp.data.id}`)
                    // go somewhere else --> trip show?
                    // add the new trip to the store
                }
                })
                .catch(console.log)
        
    }
}