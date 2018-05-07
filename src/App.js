import React, { Component } from 'react';
import Main from './Main'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div id="language">
            <a href="/power/en/index.html">EN</a><span>|</span><a href=".">中</a>
          </div>
          <div id="loading">
            <figure className="o-0">
              <img id="b2" src="images/butterfly/butterfly-move2.png" alt=""/>
              <img id="b1" src="images/butterfly/butterfly-move1.png" alt=""/>
            </figure>
          </div>
          <Main/>
        </div>
    );
  }
}

export default App;
