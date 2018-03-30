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
import { ParallaxProvider} from 'react-scroll-parallax';
import $ from 'jquery';

class App extends Component {
  componentDidMount(){
    $('#section-nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 600);
      return false;
    });
  }
  topFunction() {
    $("html, body").animate({ scrollTop: 0 }, 800);
  }
  render() {
    return (
      <div className="App">
        {/*--- Navigation---*/}
        <div id="section-nav">
          <a href="#cover">2017公民科技創新獎助金</a>
          <a href="#butterfly">見證一場「蝴蝶效應」</a>
          <a href="#projects">精選 2017 獲獎專案</a>
          <a href="#topics">五大類別獲獎專案一覽</a>
          <a href="#intro">誰是g0v？</a>
          <a href="#partner">獎助金合作夥伴</a>
          <a href="#share">參與更多行動</a>
        </div>
        <ParallaxProvider>
        <Cover/>
        <Butterfly/>
        <Projects/>
        <Topics/>
        <Intro/>
        <Numbers/>
        <Partner/>
        <Share/>
        <Footer/>
        </ParallaxProvider>
        <button onClick={this.topFunction} id="myBtn" title="Go to top">
          <FontAwesome name='long-arrow-up'/>
        </button> 
      </div>
    );
  }
}

export default App;
