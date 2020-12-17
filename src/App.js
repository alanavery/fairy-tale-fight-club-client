import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';

import Nav from './components/Nav';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: [],
      loading: false
    };
  }

  componentDidMount = async () => {
    try {
      let response = await fetch('http://localhost:3001/fighters');
      let json = await response.json();
      this.setState({ fighters: json.data, loading: true });
    } catch (err) {
      console.log(err);
    }
  };

  reload = async () => {
    try {
      let response = await fetch('http://localhost:3001/fighters');
      let json = await response.json();
      this.setState({ fighters: json.data, loading: true });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    if (!this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.fighters.length) {
      return <div>Nothing to show here.</div>;
    }

    return (
      <div>
        <Nav />
        <h1>Fairy Tale Fight Club</h1>
        <main>
          <Route exact path="/">
            <Home fighters={this.state.fighters} />
          </Route>
          <Route
            path="/fighters/:id"
            render={(routeProps) => {
              const fighter = this.state.fighters.find((fighter) => {
                return fighter._id === routeProps.match.params.id;
              });
              return <Show fighter={fighter} />;
            }}
          ></Route>
          <Route path="/fighters/new">
            <New reload={this.reload} />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;
