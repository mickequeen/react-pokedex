import React, { Component } from "react";
import pokemonGif from 'pokemon-gif';
import PropTypes from 'prop-types';
import Pokeapi from './Pokeapi/Pokeapi';
import './Card.css';

/*
*componente de clase, card que muestra imagen estática de pokémon
*/
class Card extends Component {
  render = () => {
    let superReturn = [];
    for (let i = 1; i <= 28; i++) {
      let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png';
      superReturn.push(this.mostrarPokemon(url, i));
    }
    return (superReturn);
  };

  mostrarPokemon(url, i) {
    return (
      <div className='col-md-2 contenedor' onClick={(e) => this.testfunction(i, e)} id={`cont_${i}`}>
        <img src={url} id={i} />
        {/*
          *acceso a componente pokeapi que inyecta nombres de pokemones asociados a su id
          *al pinchar botón accede a detalles de pokémon
        */}
        <Pokeapi idPokemon={i}></Pokeapi>
      </div>
    );
  };

  testfunction(id){
    //alert(id);
    console.log(id)
  }
}

export default Card;
