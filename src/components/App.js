import React, { Component } from 'react';
import '../App.css';
import NewThing from './NewThing.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Erica Miller</h1>
        </header>
        <p className="App-intro">
          Let's get ready to rumble!
        </p>

        <NewThing />
      </div>
    );
  }
}

export default App;
