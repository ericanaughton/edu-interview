import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Erica Miller</h1>
        </header>
        <p className="App-intro">
          Let's get ready to rumble!
        </p>
      </div>
    );
  }
}

export default App;
