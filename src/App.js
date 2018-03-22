import React, { Component } from 'react';
import Cover from './components/cover';
import Intro from './components/intro';
import Numbers from './components/numbers';
import Butterfly from './components/butterfly';
import Projects from './components/projects';
import Topics from './components/topics';
import Partner from './components/partner';
import Share from './components/share';
import Footer from './components/footer';
import FontAwesome from 'react-fontawesome';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
        <Cover/>
        <Intro/>
        <Numbers/>
        <Butterfly/>
        <Projects/>
        <Topics/>
        <Partner/>
        <Share/>
        <Footer/>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
