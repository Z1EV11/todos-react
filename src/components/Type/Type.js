import React, { Component } from 'react';
import './Type.css';

class Type extends Component {

  render() {
    return (
      <div className="type">
        <input id="typeIn" type="text" placeholder="接下来要做什么？" autoFocus="autofocus" name="mission" onKeyUp={this.props.typeIn} />
      </div>
    );
  }
}

export default Type;
