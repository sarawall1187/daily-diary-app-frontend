import React from 'react'
import {connect} from 'react-redux'
import MyEntries from './MyEntries.js'

import Container from 'react-bootstrap/Container';

const DiaryContainer = ({currentUser}) => {

   
        return (
          <Container>
             {currentUser ? <MyEntries /> : ''} 
          
           </Container>
       )
  
}
const mapStateToProps = ({currentUser}) => {
  // console.log("inside mapStateToProps", currentUser)
    return ({
      currentUser
     
    })
  }
  


export default connect(mapStateToProps)(DiaryContainer);
