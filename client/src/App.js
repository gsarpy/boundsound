import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Import Components */
import Player from './components/player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">boundsound</h1>
        </header>
        <p className="App-intro">
          Select an audiobook to listen to.
        </p>

        <Player />
      </div>
    );
  }
}

export default App;
