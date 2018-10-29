import React, { Component } from 'react';
import './Option.css';

class Option extends Component {

  render() {

    return (
      <div className="option">
        <span>{this.props.left} items left</span>
        <div className="select-wrapper">
          <ul onClick={this.props.changeType} data-type={this.props.type} >
            <li id="All" className="on" >All</li>
            <li id="Active" >Active</li>
            <li id="Completed" >Completed</li>
          </ul>
        </div>
        <div className="clear-wrapper">
          <button onClick={this.props.clearCompleted} >Clear completed</button>
        </div>
      </div>
    );
  }
}

export default Option;
