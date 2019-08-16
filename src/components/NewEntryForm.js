import React from 'react'
import {updateNewEntryForm} from '../actions/newEntryForm.js'

const NewEntryForm = () => {

    const handleChange = (event) => {
        const {name, value} = event.target
        updateNewEntryForm(name, value)

    }
 return
    ( <div>
        <form>
            <input type="textarea" name="todaysEntry" value={} onChange={handleChange}/><br/>
            <input type="textarea" name="tomorrowsGoal" value={} onChange={handleChange}/><br/>
            <input type="textarea" name="foodLog" value={} onChange={handleChange}/><br/>
            <input type="submit"/>
        </form>
    </div>)
}

export default NewEntryForm