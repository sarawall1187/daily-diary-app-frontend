import React from 'react'
import {connect} from 'react-redux'
import MyEntries from './MyEntries.js'
import Quote from './Quote.js'

const DiaryContainer = ({currentUser}) => {

   
        return (
            <div>
              <h3>Welcome {currentUser.attributes.username}</h3>
              <MyEntries/>
              <Quote/>
            </div>
           
       )
  
}
const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(DiaryContainer);
