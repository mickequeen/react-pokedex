import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
