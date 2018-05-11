import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'

class Main extends Component {
  render() {
    const reload = () => {
      window.location.reload();
      console.log("RELOAD?")
    }
    return (
      <main>
        <div id="language">
          <a href="/power/en">EN</a><span>|</span><a href=".">中</a>
        </div>
        <div id="loading">
          <figure className="o-0">
            <img id="b2" src="images/butterfly/butterfly-move2.png" alt=""/>
            <img id="b1" src="images/butterfly/butterfly-move1.png" alt=""/>
          </figure>
        </div>
        <Switch>
          <Route exact path='/power' component={Home} />
          <Route path="/power/en" onEnter={reload} />
        </Switch>
      </main>
    );
  }
}

export default Main;
