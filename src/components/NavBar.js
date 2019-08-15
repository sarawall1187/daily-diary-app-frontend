import React from 'react'
import {connect} from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'

 const NavBar = ({currentUser}) => {

    return (
       <div>
           {currentUser ? <strong>Welcome {currentUser.username}</strong> : "Welcome to your Daily Diary"}
           {currentUser ? <Logout/> : <Login/>}
       </div>
    )
}


const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(NavBar);