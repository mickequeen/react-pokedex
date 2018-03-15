import React, { Component } from "react";
import './Card.css';

class Card extends Component {
  render = () => {
    let superReturn = [];
    for (let i = 1; i <= 802; i++) {
      let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png';
      superReturn.push(this.mostrarPokemon(url, i));
    }
    return (superReturn);
  };

  mostrarPokemon(url, i) {
    return (
      <div className='col-md-2 contenedor' onClick={(e) => this.testfunction(i, e)}>
        <img src={url} id={i}/>;
      </div>
    );
  };

  testfunction(id){
    //alert(id);
    console.log(id)
  }
}

export default Card;
