import React, { Component } from 'react';
import './App.css';

import Todo from './components/Todo/Todo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="blur" alt="background" />
        <header className="app-header"><h1>JUST DO IT.</h1></header>
        <Todo {...this.props}/>
        <footer className="app-footer"><span>Designed by Frank</span></footer>
      </div>
    );
  }
}

export default App;
