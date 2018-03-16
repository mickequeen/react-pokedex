import React, { Component } from 'react';
import Card from './Card/Card';
import './Content.css'

/*
*Div que contiene todos los cards (pokebolas) con pokémon y sus respectivos nombres
*/
class Content extends Component{
  render() {
    return(
      <div id="content">
        <Card/>
      </div>
    )
  }
}

export default Content;

