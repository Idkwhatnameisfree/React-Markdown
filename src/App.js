import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo'
import List from './components/List'
import Markdown from './components/Markdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <List />
          
        </header>
      </div>
    );
  }
}

export default App;
