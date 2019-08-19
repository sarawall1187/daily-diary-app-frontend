import React from 'react'
import {connect} from 'react-redux'
import {updateNewEntryForm} from '../actions/entryForm.js'


const EntryForm = ({formData, updateNewEntryForm, userId, entry, handleSubmit, editMode}) => {
 
    const {todaysEntry, tomorrowsGoal, foodLog} = formData

    const handleChange = (event) => {
        const {name, value} = event.target
        updateNewEntryForm(name, value)

    }

 return ( 
        <form onSubmit={event => handleSubmit(event, formData, userId)}>
            <label htmlFor="todaysEntry">Anything interesting happen today?</label>
            <input type="textarea" name="todaysEntry" value={todaysEntry} onChange={handleChange}/><br/>
            <label htmlFor="tomorrowsGoal">What are your goals for tomorrow?</label>
            <input type="textarea" name="tomorrowsGoal" value={tomorrowsGoal} onChange={handleChange}/><br/>
            <label htmlFor="foodLog">Log what you ate today. It will help you stay on track:</label>
            <input type="textarea" name="foodLog" value={foodLog} onChange={handleChange}/><br/>
            <input type="submit" value={editMode ? "Edit Diary Entry" : "Create Diary Entry"} />
        </form>
     )};

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
       formData: state.entryForm,
        userId
    }
}

export default connect(mapStateToProps, {updateNewEntryForm})(EntryForm)