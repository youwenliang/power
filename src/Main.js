import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/power' component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
