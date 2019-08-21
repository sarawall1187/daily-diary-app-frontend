import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'
import Container from 'react-bootstrap/Container';


 const NavBar = ({currentUser}) => {

    return (
    
       <div className="NavBar">
       <h3 className="navlink">Welcome {currentUser.attributes.username}</h3>
          <NavLink exact className="active navlink" to="/entries">My Diary Entries </NavLink>
          <NavLink exact className="active navlink" to="/entries/new">Create a New Diary Entry</NavLink>
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