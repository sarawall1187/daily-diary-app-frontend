import React from 'react'
import {connect} from 'react-redux'
import MyEntries from './MyEntries.js'

import Container from 'react-bootstrap/Container';

const DiaryContainer = ({currentUser}) => {

   
        return (
          <Container>
              {/* <Quote/> */}
              <MyEntries/>
           </Container>
       )
  
}
const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(DiaryContainer);
