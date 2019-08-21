import React from 'react'
import {Link} from 'react-router-dom'

const EntryCard = ({entry}) => {
    return(
        entry ? 
        <div className="entryCard">
            <h3>Diary Entry for: {entry.attributes.created_at}</h3>
          <ul>
            <li><strong>Today's events:</strong> {entry.attributes.todays_entry}</li>
            <li><strong>Tomorrow's goals:</strong> {entry.attributes.tomorrows_goal}</li>
            <li><strong>Food Log:</strong> {entry.attributes.food_log}</li>
          </ul>
          <Link style={{color: "rgb(1, 223, 215)"}} to={`/entries/${entry.id}/edit`}>Edit this Diary Entry</Link>
        </div> 

        : null
    )
}


export default EntryCard