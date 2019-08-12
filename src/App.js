import React from 'react';
import './App.css';
import Login from './components/Login.js'

class App extends React.Component {

  render() {
  return (
    <div className="App">
      Welcome to Daily Diary
      <Login/>
    </div>
  );
 }
}

export default App;
