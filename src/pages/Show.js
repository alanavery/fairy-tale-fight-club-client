import React, { Component } from 'react';

class Show extends Component {
  render() {
    if (!this.props.fighter) {
      return <div>Loading...</div>;
    }

    const weaponsList = this.props.fighter.weapons.map((weapon) => {
      return (
        <ul key={weapon._id}>
          <li>Name: {weapon.name}</li>
          <li>Magical: {String(weapon.magical)}</li>
        </ul>
      );
    });

    const alliesList = this.props.fighter.allies.map((ally) => {
      return (
        <ul key={ally._id}>
          <li>Name: {ally.name}</li>
          <li>Species: {ally.species}</li>
          <li>Secret Weapon: {ally.secretWeapon}</li>
        </ul>
      );
    });

    return (
      <div className="div-profile">
        <h2>{this.props.fighter.name}</h2>
        <ul>
          <li>Species: {this.props.fighter.species}</li>
          <li>Weapons:</li>
          <ul>{weaponsList}</ul>
          <li>Territory: {this.props.fighter.territory}</li>
          <li>Height (cm): {this.props.fighter.heightCm}</li>
          <li>Weight (kg): {this.props.fighter.weightKg}</li>
          <li>Allies:</li>
          <ul>{alliesList}</ul>
        </ul>
      </div>
    );
  }
}

export default Show;
