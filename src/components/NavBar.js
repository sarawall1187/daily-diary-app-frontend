import React from 'react'
import {connect} from 'react-redux'
import Login from './Login.js'
import Signup from './Signup.js'

 const NavBar = ({currentUser}) => {

    return (
       <div>
           {/* {currentUser ? <strong>Welcome {currentUser.attributes.username}</strong> : "Welcome to your Daily Diary"} */}
           {/* {currentUser ? <Logout/> : <Login/>} */}
           {/* <Login/>
           
           <Signup/> */}
           <h1>Welcome to your Daily Diary</h1>
           <button>Login</button><p>or</p><button>Signup</button>
          
       </div>
    )
}


const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(NavBar);