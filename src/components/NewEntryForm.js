import React from 'react'
import {connect} from 'react-redux'
import {updateNewEntryForm} from '../actions/newEntryForm.js'
import {createEntry} from '../actions/myEntries.js'

const NewEntryForm = ({formData, history, updateNewEntryForm, createEntry, userId}) => {
 
    const {todaysEntry, tomorrowsGoal, foodLog} = formData

    const handleChange = (event) => {
        const {name, value} = event.target
        updateNewEntryForm(name, value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createEntry({formData, userId}, history)
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
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
       formData: state.newEntryForm,
        userId
    }
}

export default connect(mapStateToProps, {updateNewEntryForm, createEntry})(NewEntryForm)