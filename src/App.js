import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyEntries from './components/MyEntries.js'
import EntryCard from './components/EntryCard.js'
import EntryForm from './components/EntryForm.js'

import DiaryContainer from './components/DiaryContainer.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn, myEntries} = this.props
    return (
      <div>   
     
       <Router>
         {loggedIn ? <NavBar/> : null}
          <Route exact path='/' render={(props) => loggedIn ? <DiaryContainer {...props}/> : <Home {...props}/>}/>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/> 
          <Route exact path='/entries' component={MyEntries}/> 
          <Route exact path='/entries/new' component={EntryForm}/> 
          <Route exact path='/entries/:id' render={props => {
            const entry = myEntries.find(entry => entry.id === props.match.params.id)
            return <EntryCard entry={entry} {...props}/> }
          }/>
          <Route exact path='/entries/:id/edit' render={props => {
            const entry = myEntries.find(entry => entry.id === props.match.params.id)
            return <EntryForm entry={entry} {...props}/> }
          }/>
          <Route/>
       </Router>
       
      </div> 
      
    )
 }
}
const mapStateToProps = (state) => {
  return {
      loggedIn: !!state.currentUser,
      myEntries: state.myEntries
     
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
