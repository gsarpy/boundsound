import React, { Component } from 'react';
import '../../css/styles.css';

import Controls from './controls.js';

class Player extends Component {


  render() {
    return (
      <div className="player">
        <div className="cover">
          <img src={this.props.cover} alt={this.props.title} />
        </div>

        <h3>{this.props.title}</h3>
        <p className="description">
          {this.props.description}
        </p>

        <audio controls src="hello.mp3"></audio>
        <Controls />
      </div>
    );
  }
}

export default Player;
