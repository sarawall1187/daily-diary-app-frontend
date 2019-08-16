import React from 'react'
// import Login from './Login.js'
// import Signup from './Signup.js'
import {Link} from 'react-router-dom'

 const Home = () => {

    return (
        <div>
         <h1>Welcome to your Daily Diary</h1> 
         <h2><Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h2>
       </div>
    )
}


export default Home