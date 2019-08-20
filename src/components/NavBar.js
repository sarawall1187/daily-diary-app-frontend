import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'
import Container from 'react-bootstrap/Container';


 const NavBar = ({currentUser}) => {

    return (
      <Container>
       <div className="NavBar">
          <NavLink exact activeclass to="/entries">My Diary Entries </NavLink>
          <NavLink exact activeclass to="/entries/new">Create a New Diary Entry   </NavLink>
          {!!currentUser ? <Logout/> : null}
       </div>
       </Container>
    )
}


const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(NavBar);