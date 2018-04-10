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
import loadImage from 'image-promise';
import $ from 'jquery';

var id = ['cover','butterfly','projects','topics','intro','partner','share'];

class App extends Component {
  componentDidMount(){
    $('#section-nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 600);
      return false;
    });
    var images  = [];
    loadImage(images)
    .then(function (allImgs) {
      console.log(allImgs.length, 'images loaded!', allImgs);
    })
    .catch(function (err) {
      console.error('One or more images have failed to load :(');
      console.error(err.errored);
      console.info('But these loaded fine:');
      console.info(err.loaded);
    });

    $(window).scroll( function(){
      for (var i = 0; i < 7; i++) {
        if($(window).scrollTop() >= $('#'+id[i]).offset().top - $(window).height()/2) {
          $('.active').removeClass('active');
          $('a[href="#'+id[i]+'"]').addClass('active');
        }
      }
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
          <a className="nav-link active" href="#cover">2017 公民科技創新獎助金</a>
          <a className="nav-link" href="#butterfly">見證一場「蝴蝶效應」</a>
          <a className="nav-link"href="#projects">精選 2017 獲獎專案</a>
          <a className="nav-link"href="#topics">五大類別獲獎專案一覽</a>
          <a className="nav-link"href="#intro">誰是g0v？</a>
          <a className="nav-link"href="#partner">獎助金合作夥伴</a>
          <a className="nav-link"href="#share">參與更多行動</a>
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
