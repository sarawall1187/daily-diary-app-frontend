import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'


 const NavBar = ({currentUser}) => {

    return (
       <div className="NavBar">
          <NavLink exact activeClass to="/entries">My Diary Entries |  </NavLink>
          <NavLink exact activeClass to="/entries/new">Create a New Diary Entry   </NavLink>
          {!!currentUser ? <Logout/> : null}
       </div>
    )
}


const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(NavBar);