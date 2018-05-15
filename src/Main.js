import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'

class Main extends Component {
  render() {
    function changeLAN() {
      if (typeof window !== 'undefined') {
        window.location = '/power_en';
      }
    }
    return (
      <main>
        <div id="language">
          <a onClick={changeLAN} href="#">EN</a><span>|</span><a href=".">中</a>
        </div>
        <div id="loading">
          <figure className="o-0">
            <img id="b2" src="images/butterfly/butterfly-move2.png" alt=""/>
            <img id="b1" src="images/butterfly/butterfly-move1.png" alt=""/>
          </figure>
        </div>
        <Switch>
          <Route exact path='/power' component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
