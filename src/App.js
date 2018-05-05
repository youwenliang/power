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
// var project = ['turt','line','open','treat'];
var img = ['cover', 'idea', 'insight', 'impact', 'logo'];

class App extends Component {
  componentDidMount(){
    $('html').addClass('no-scroll');
    $('#section-nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 800);
      return false;
    });
    var pre = ['images/butterfly/butterfly-move1.png', 'images/butterfly/butterfly-move2.png']
    loadImage(pre)
    .then(function (allImgs) {
      console.log(allImgs.length, 'images loaded!!', allImgs);
      $('#loading figure').removeClass('o-0');
    })
    .catch(function (err) {
      console.error('One or more images have failed to load :(');
      console.error(err.errored);
      console.info('But these loaded fine:');
      console.info(err.loaded);
    });

    var images  = ['images/cover-bg.png','images/cover/big-butterfly.png', 'images/cover/people.png', 'images/cover/lines.png', 'images/butterfly/butterfly-bg.png', 'images/star-transparent.png'];
    // for(var i = 0; i < img.length; i++){
    //   for(var j = 0; j < project.length; j++) {
    //     images.push('images/projects/'+img[i]+'-'+project[j]+'.png');
    //   }
    // }
    // for(var k = 0; k < 5; k++) {
    //   images.push('images/numbers/g0v-0'+k+'.jpg');
    // }
    loadImage(images)
    .then(function (allImgs) {
      console.log(allImgs.length, 'images loaded!', allImgs);
      setTimeout(function(){
        $('html').removeClass('no-scroll');
        $('#loading').addClass('none');
        $('.cover-bg').removeClass('init')
      },600);
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
        <div id="language">
          <a href="/">EN</a><span>|</span><a href="../">中</a>
        </div>
        <div id="loading">
          <figure className="o-0">
            <img id="b2" src="images/butterfly/butterfly-move2.png" alt=""/>
            <img id="b1" src="images/butterfly/butterfly-move1.png" alt=""/>
          </figure>
        </div>
        {/*--- Navigation---*/}
        <div id="section-nav">
          <a className="nav-link active" href="#cover">Civic Tech Prototype Grant</a>
          <a className="nav-link" href="#butterfly">Get ready to witness a “Butterfly effect”!</a>
          <a className="nav-link"href="#projects">Featured 2017 Grantee</a>
          <a className="nav-link"href="#topics">Five Categories of Winning Projects</a>
          <a className="nav-link"href="#intro">What is g0v?</a>
          <a className="nav-link"href="#partner">Partners</a>
          <a className="nav-link"href="#share">Take Actions</a>
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
