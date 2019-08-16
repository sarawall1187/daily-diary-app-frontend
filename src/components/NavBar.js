import React from 'react'
import {connect} from 'react-redux'


 const NavBar = ({currentUser}) => {

    return (
       <div>
           {/* {currentUser ? <strong>Welcome {currentUser.attributes.username}</strong> : "Welcome to your Daily Diary"} */}
           {/* {currentUser ? <Logout/> : <Login/>} */}
           {/* <Login/>
           
           <Signup/> */}
          
           {/* <button>Login</button><p>or</p><button>Signup</button> */}
          
       </div>
    )
}


const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(NavBar);