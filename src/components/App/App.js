import React, { Component } from 'react';
import Header from '../Header/Header';
import Person from '../Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Person />
      </div>
    );
  }
}

export default App;
