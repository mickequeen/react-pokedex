import React, { Component } from 'react';
import logo from './../../img/logo.png'
import './Nav.css'

class Nav extends Component {
  render(){
    return(
      <header>
        <nav className="navbar navbar-collapse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <div className="balls" id="bigBlue"></div>
                <div className="balls" id="littleRed"></div>
                <div className="balls" id="littleYellow"></div>
                <div className="balls" id="littleGreen"></div>
                <img alt="Brand" src={logo} className="img-responsive"/>
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav; 