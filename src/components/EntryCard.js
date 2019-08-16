import React from 'react'


const EntryCard = ({entry}) => {
    return(
        <div>
        <p>{entry.attributes.todays_entry}</p>
        <p>{entry.attributes.tomorrows_goal}</p>
        <p>{entry.attributes.food_log}</p>
        </div>
    )
}


export default EntryCard