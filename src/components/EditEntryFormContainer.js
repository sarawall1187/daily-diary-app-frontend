import React from 'react'
import {connect} from 'react-redux'
import {updateEntry, deleteEntry} from '../actions/myEntries.js'
import {dataForEditEntryForm, resetNewEntryForm} from '../actions/entryForm.js'
import EntryForm from './EntryForm.js'
import Button from 'react-bootstrap/Button';


class EditEntryFormContainer extends React.Component {

    componentDidMount(){
        this.props.entry && this.props.dataForEditEntryForm(this.props.entry)
    }

    componentDidUpdate(prevProps){
        this.props.entry && !prevProps.entry &&
         this.props.dataForEditEntryForm(this.props.entry)
    }

    componentWillUnmount(){
        this.props.resetNewEntryForm()
    }
    
    handleSubmit = (event, formData, userId) => {
        const {updateEntry, entry, history} = this.props
        event.preventDefault()
        updateEntry({formData,
            entryId: entry.id,
            userId}, history)
    }

    render() {
    const {history, deleteEntry, entry} = this.props
    const entryId = entry ? entry.id : null
        return (
        <div>
          <EntryForm editMode handleSubmit={this.handleSubmit}/>
          <br/>
          <button style= {{color: "red"}}onClick={()=>deleteEntry(entryId, history)}>Delete this Diary Entry</button>
        </div>
        )
    }
}

export default connect(null, {updateEntry, dataForEditEntryForm, resetNewEntryForm, deleteEntry})(EditEntryFormContainer)