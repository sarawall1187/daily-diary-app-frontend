import React from 'react'
import {connect} from 'react-redux'
import {updateNewEntryForm} from '../actions/entryForm.js'
import { deleteEntry} from '../actions/myEntries.js'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const EntryForm = ({formData, history, updateNewEntryForm, userId, entry, handleSubmit, editMode, deleteEntry}) => {
 
    const {todaysEntry, tomorrowsGoal, foodLog} = formData
    // const {deleteEntry} = this.props
    const entryId = entry ? entry.id : null

    const handleChange = (event) => {
        const {name, value} = event.target
        updateNewEntryForm(name, value)

    }

 return ( 
    
    <Container className="loginForm"> 
      <Form onSubmit={event => handleSubmit(event, formData, userId)}>
        <Form.Group controlId="formBasictodaysEntry">
          <Form.Label>Anything interesting happen today?</Form.Label>
            <Form.Control type="textarea" name="todaysEntry" value={todaysEntry} onChange={handleChange}/><br/>
         </Form.Group>

        <Form.Group controlId="formBasictomorrowsGoal">
           <Form.Label>What are your goals for tomorrow?</Form.Label>
              <Form.Control type="textarea" name="tomorrowsGoal" value={tomorrowsGoal} onChange={handleChange}/><br/>
        </Form.Group>

        <Form.Group controlId="formBasicfoodLog">
         <Form.Label>Log what you ate today. It will help you stay on track:</Form.Label>
           <Form.Control type="textarea" name="foodLog" value={foodLog} onChange={handleChange}/><br/>
        </Form.Group>
        
        <Form.Control style={{color: "rgb(1, 223, 215)"}} type="submit" value={editMode ? "Edit Diary Entry" : "Create Diary Entry"} /> <br/>
        {/* {editMode ?  <Form.Control type="submit" style={{color: "rgb(1, 223, 215)"}} onClick={()=>deleteEntry(entryId, history, userId)} value="Delete this Diary Entry" /> : null}  */}
         {editMode ?  <button style={{color: "rgb(1, 223, 215)"}} onClick={()=>deleteEntry(entryId, history, userId)}>Delete this Diary Entry</button> : ""}  
      </Form>
    </Container> 
     )};

const mapStateToProps = (state) => {
    // const { entry} = this.props
    // const entryId = entry ? entry.id : null
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
       formData: state.entryForm,
        userId
    }
}

export default connect(mapStateToProps, {updateNewEntryForm, deleteEntry})(EntryForm)