import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FormField from '../components/FormField';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      species: '',
      weapons: {
        name: '',
        magical: false
      },
      territory: '',
      heightCm: 0,
      weightKg: 0,
      allies: {
        name: '',
        species: '',
        secretWeapon: ''
      }
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    try {
      let response = await fetch('http://localhost:3001/fighters/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      let json = await response.json();
      this.props.reload();
      this.props.history.push(`/show/${json.fighter._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h2>Create a New Fighter</h2>
        <FormField labelLink="name" displayLink="Name:" value={this.state.name} handler={this.handleInput} />
        <FormField labelLink="species" displayLink="Species:" value={this.state.species} handler={this.handleInput} />
        <p>Weapons:</p>
        <FormField
          labelLink="weaponName"
          displayLink="Name:"
          value={this.state.weapons.name}
          handler={this.handleInput}
        />
        <FormField
          labelLink="weaponMagical"
          displayLink="Magical:"
          value={this.state.weapons.magical}
          handler={this.handleInput}
        />
        <FormField
          labelLink="territory"
          displayLink="Territory:"
          value={this.state.territory}
          handler={this.handleInput}
        />
        <FormField
          labelLink="heightCm"
          displayLink="Height (cm):"
          value={this.state.heightCm}
          handler={this.handleInput}
        />
        <FormField
          labelLink="weightKg"
          displayLink="Weight (kg):"
          value={this.state.weightKg}
          handler={this.handleInput}
        />
        <p>Allies:</p>
        <FormField labelLink="allyName" displayLink="Name:" value={this.state.allyName} handler={this.handleInput} />
        <FormField
          labelLink="allySpecies"
          displayLink="Species:"
          value={this.state.allySpecies}
          handler={this.handleInput}
        />
        <FormField
          labelLink="allySecretWeapon"
          displayLink="Secret Weapon:"
          value={this.state.allySecretWeapon}
          handler={this.handleInput}
        />
        <input type="submit" value="Create" onClick={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default withRouter(New);
