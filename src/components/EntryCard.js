import React from 'react'


const EntryCard = ({entry}) => {
    return(
        <div>
            <h3>Entry for: {entry.attributes.created_at}</h3>
          <ul>
            <li> {entry.attributes.todays_entry}</li>
            <li> {entry.attributes.tomorrows_goal}</li>
            <li> {entry.attributes.food_log}</li>
          </ul>
        </div>
    )
}


export default EntryCard