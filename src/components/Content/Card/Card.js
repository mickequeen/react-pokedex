import React, { Component } from "react";
import pokemonGif from 'pokemon-gif';
import PropTypes from 'prop-types';
import pokemonNumberToName from 'pokemon-gif/lib/pokedex-number-to-name';
import './Card.css';

class Card extends Component {
  render = () => {
    let superReturn = [];
    for (let i = 1; i <= 802; i++) {
      let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png';
      const name = pokemonNumberToName[i];
      superReturn.push(this.mostrarPokemon(url, i, name));
      console.log(name)

    }
    return (superReturn);
      };

  mostrarPokemon(url, i, name) {
    return (
      <div className='col-md-2 contenedor' onClick={(e) => this.testfunction(i, e)}>
        <img src={url} id={i}/>
        <p>{ name }</p>
      </div>
    );
  };

  testfunction(id){
    //alert(id);
    console.log(id)
  }
}

export default Card;
