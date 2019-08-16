import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyEntries from './components/MyEntries.js'

import DiaryContainer from './components/DiaryContainer.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn} = this.props
    return (
      <div>   
       <Router>
          <Route exact path='/' render={(props) => loggedIn ? <DiaryContainer {...props}/> : <Home {...props}/>}/>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/signup' component={Signup}/> 
          <Route exact path='/myentries' component={MyEntries}/> 
          <Route/>
       </Router>
       
      </div> 
      
    )
 }
}
const mapStateToProps = (state) => {
  return {
      loggedIn: !!state.currentUser
     
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
