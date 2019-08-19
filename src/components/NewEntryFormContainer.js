import React from 'react'
import {connect} from 'react-redux'
import {createEntry} from '../actions/myEntries.js'
import EntryForm from './EntryForm.js'


const NewEntryFormContainer = ({history, createEntry}) => {
    const handleSubmit = (event, formData, userId, history) => {
        event.preventDefault()
        createEntry({formData, userId}, history)
    }
    return <EntryForm history={history} handleSubmit={handleSubmit}/>
}

export default connect(null, {createEntry})(NewEntryFormContainer)