import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';

 const Home = () => {

    return (
        <div>
          <Container className="home">
            <h1>Welcome to your Daily Diary</h1> 
            <br/>
            <h2><Link to="/signup" className="link">Sign Up</Link> or <Link to="/login" className="link">Log In</Link></h2>
           </Container>
       </div>
    )
}


export default Home