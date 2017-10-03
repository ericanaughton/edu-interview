import React, { Component } from 'react';
import '../index.css';
import NewThing from './NewThing.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="name">Erica Miller</div>
          <div className="company">Eduphoria</div>
        </div>

        <div className="container">
          <NewThing />
        </div>
      </div>
    );
  }
}

export default App;
