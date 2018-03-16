import React, { Component } from 'react';
import logo from './../../img/logo.png'
import './Nav.css'

/*
*componente navbar con logo pokedex
*/
class Nav extends Component {
  render(){
    return(
      <header>
        <nav className="navbar navbar-collapse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
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