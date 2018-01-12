import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <audio controls src="hello.mp3"></audio>
      </div>
    );
  }
}

export default Player;
