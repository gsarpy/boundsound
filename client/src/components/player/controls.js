import React, { Component } from 'react';

class Controls extends Component {

  render() {
    return (
      <div className="controls">
        <ul>
          <li><h2><i class="fas fa-step-backward"></i></h2></li>
          <li><h2><i class="fas fa-backward"></i></h2></li>
          <li><h2><i class="fas fa-play"></i></h2></li>
          <li><h2><i class="fas fa-forward"></i></h2></li>
          <li><h2><i class="fas fa-step-forward"></i></h2></li>
        </ul>
      </div>
    );
  }
}

export default Controls;
