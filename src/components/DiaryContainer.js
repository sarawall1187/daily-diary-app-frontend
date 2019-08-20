import React from 'react'
import {connect} from 'react-redux'
import MyEntries from './MyEntries.js'
import Quote from './Quote.js'
import Container from 'react-bootstrap/Container';

const DiaryContainer = ({currentUser}) => {

   
        return (
          <Container>
            <div>
              <h3>Welcome {currentUser.attributes.username}</h3>
              <MyEntries/>
              <Quote/>
            </div>
           </Container>
       )
  
}
const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(DiaryContainer);
