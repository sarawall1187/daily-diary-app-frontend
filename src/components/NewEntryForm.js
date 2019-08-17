import React from 'react'
import {connect} from 'react-redux'
import {updateNewEntryForm} from '../actions/newEntryForm.js'

const NewEntryForm = ({todaysEntry, tomorrowsGoal, foodLog, history}) => {

    const handleChange = (event) => {
        const {name, value} = event.target
        updateNewEntryForm(name, value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
 return ( 
        <form onSubmit={handleSubmit}>
            <input type="textarea" name="todaysEntry" value={todaysEntry} onChange={handleChange}/><br/>
            <input type="textarea" name="tomorrowsGoal" value={tomorrowsGoal} onChange={handleChange}/><br/>
            <input type="textarea" name="foodLog" value={foodLog} onChange={handleChange}/><br/>
            <input type="submit"/>
        </form>
     )};

const mapStateToProps = (state) => {
    const {todaysEntry, tomorrowsGoal, foodLog} = state.newEntryForm
    return {
        todaysEntry,
        tomorrowsGoal,
        foodLog
    }
}

export default connect(mapStateToProps, {updateNewEntryForm})(NewEntryForm)