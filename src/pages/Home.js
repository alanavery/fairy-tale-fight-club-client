import React, { Component } from 'react';

import FighterLink from '../components/FighterLink';

class Home extends Component {
  render() {
    const fighterLinks = this.props.fighters.map((fighter) => {
      return <FighterLink fighter={fighter} key={fighter._id} />;
    });

    return (
      <div>
        <h2>Fighters</h2>
        {fighterLinks}
      </div>
    );
  }
}

export default Home;
