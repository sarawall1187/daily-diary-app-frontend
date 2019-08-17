import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyEntries from './components/MyEntries.js'
import NewEntryForm from './components/NewEntryForm.js'

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
       {loggedIn ? <NavBar/> : null}
          <Route exact path='/' render={(props) => loggedIn ? <DiaryContainer {...props}/> : <Home {...props}/>}/>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/> 
          <Route exact path='/entries' component={MyEntries}/> 
          <Route exact path='/entries/new' component={NewEntryForm}/> 
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
