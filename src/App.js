import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.js'
import Content from './components/Content/Content.js'

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Content></Content>
      </div>
    )
  }
}

export default App;
