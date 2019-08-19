import React from 'react'
import {connect} from 'react-redux'
import {updateEntry} from '../actions/myEntries.js'
import {dataForEditEntryForm} from '../actions/entryForm.js'
import EntryForm from './EntryForm.js'


class EditEntryFormContainer extends React.Component {

    componentDidMount(){
        this.props.entry && this.props.dataForEditEntryForm(this.props.entry)
    }
    
    handleSubmit = (event, formData, userId, history) => {
        const {updateEntry, trip} = this.props
        event.preventDefault()
        updateEntry({formData,
            entryId: trip.id,
            userId}, history)
    }

    render() {
    const {history, handleSubmit} = this.props
        return (
        <div>
        <EntryForm editMode history={history} handleSubmit={handleSubmit}/>
        </div>
        )
    }
}

export default connect(null, {updateEntry, dataForEditEntryForm})(EditEntryFormContainer)