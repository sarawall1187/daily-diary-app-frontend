import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import MyEntries from './components/MyEntries.js'

import DiaryContainer from './components/DiaryContainer.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>   
       <NavBar/>
       <DiaryContainer/> 
       <Router>
          <Route exact path='/login' component={Login}/> 
          {/* <Route exact path='/logout' component={Logout}/>  */}
          <Route exact path='/myentries' component={MyEntries}/> 
          <Route/>
       </Router>
       
      </div> 
      
    )
 }
}

export default connect(null, {getCurrentUser})(App);
