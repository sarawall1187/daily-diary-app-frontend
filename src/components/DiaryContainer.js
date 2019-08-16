import React from 'react'
import {connect} from 'react-redux'
import MyEntries from './MyEntries.js'
import Logout from './Logout.js'

const DiaryContainer = ({currentUser}) => {

   
        return (
            <div>
              {currentUser ? <strong>Welcome {currentUser.attributes.username}</strong> : "Welcome to your Daily Diary"}
              <MyEntries/>
              <Logout/>
            </div>
           
       )
  
}
const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(DiaryContainer);
