import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import NavBar from './components/NavBar.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>   
       <NavBar/>
      </div> 
      
    )
 }
}

export default connect(null, {getCurrentUser})(App);
