import React, { Component } from 'react';
import '../App.css';
import NewThing from './NewThing.js';

class App extends Component {
  render() {
    return (
      <div className="container  center">
        <div className="header">
          <h1 className="title">Erica Miller</h1>
        </div>

        <NewThing />
      </div>
    );
  }
}

export default App;
