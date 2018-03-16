import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import pokemonGif from 'pokemon-gif';
import pokedexNumberToName from 'pokemon-gif/lib/pokedex-number-to-name';
import './../Card.css';

const urlPokemon = idPokemon => `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`

class Pokeapi extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    fetch(urlPokemon(this.props.idPokemon))
      .then(d => d.json())
      .then(d => {
        this.setState({
          pokedata: d
        })
      })
  }

  render() {
    
    if (!this.state.pokedata) return <Button id="name-poke">{this.props.buttonLabel}Loading...</Button>;
    return (
      <div>
        <Button id="name-poke" onClick={this.toggle}>{this.props.buttonLabel}{this.state.pokedata.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <div className="balls" id="bigBlue"></div>
            <div className="balls" id="littleRed"></div>
            <div className="balls" id="littleYellow"></div>
            <div className="balls" id="littleGreen"></div>
          </ModalHeader>
          <ModalBody>
          <div className="containerGif">
            <img className="pokeGifImg" src={pokemonGif(this.state.pokedata.name)}/>
          </div>
          <div className="pokeDetail">
            <p><b>Name:</b> {this.state.pokedata.name}</p>
            <p><b>N° Pokedex: #</b> {this.state.pokedata.id}</p>
            <p><b>Ability:</b> {this.state.pokedata.abilities[0].ability.name}</p>
            <p><b>Type:</b> {this.state.pokedata.types[0].type.name}</p>
          </div>
          
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Pokeapi;