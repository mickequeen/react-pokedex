import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
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
    if (!this.state.pokedata) return <Button id="name-poke">{this.props.buttonLabel}Loading...</Button>
    return (
      <div>
        <Button id="name-poke" onClick={this.toggle}>{this.props.buttonLabel}{this.state.pokedata.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.pokedata.name}</ModalHeader>
          <ModalBody>
            <p>N° Pokedex: {this.state.pokedata.id}</p>
            <p>Ability: {this.state.pokedata.abilities[0].ability.name}</p>
            <p>Type: {this.state.pokedata.types[0].type.name}</p>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Pokeapi;