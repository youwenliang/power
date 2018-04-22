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
        <div id="loading">
          <figure className="o-0">
            <img id="b2" src="images/butterfly/butterfly-move2.png" alt=""/>
            <img id="b1" src="images/butterfly/butterfly-move1.png" alt=""/>
          </figure>
        </div>
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
