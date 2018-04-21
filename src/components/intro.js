import React, { Component } from 'react'
import AnimatedNumber from 'react-animated-number';
import $ from 'jquery';

var view = false;

var section =
{
  "title": "誰是 g0v ？",
  "numbers": "從 2012 到 2018， g0v 創造了…",
  "content": "g0v.tw 是一個推動資訊透明化的社群，以開放原始碼的精神為基底，致力於開發公民參與社會的資訊平台與工具。將 gov 以「零」替代成為 g0v，從零重新思考政府的角色，也是代表數位原生世代從 0 與 1 世界的視野。"
}

class Intro extends Component {
    constructor(props) {
      super(props);
      this.state = {
        num: false
      };
    }
    componentDidMount(){
     
    }
    
    numbers = () => {
      return (
        <div className="center mt4 mw6">
          <ul className="ma0 pa0 tc">
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="29"
                stepPrecision = {0}
                duration={650} />
              </h1><span>次</span>
              <p className="ma0 tc pa0 tracked">黑客松</p>
              <a className="dib white ma0 pa0" href="https://hack.g0v.tw/" target="_blank"><h6 className="u-line ma0 mt2 o-60">前往揪松網>></h6></a>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="3"
                stepPrecision = {0}
                duration={650} />
              </h1><span>次</span>
              <p className="ma0 tc pa0 tracked">國際雙年會</p>
              <a className="dib white ma0 pa0" href="http://summit.g0v.tw/2018/" target="_blank"><h6 className="u-line ma0 mt2 o-60">最新資訊>></h6></a>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="517"
                stepPrecision = {0}
                duration={950} />
              </h1><span>次</span>
              <p className="ma0 tc pa0 tracked">正式提案</p>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="304"
                stepPrecision = {0}
                duration={950} />
              </h1><span>位</span>
              <p className="ma0 tc pa0 tracked">坑主</p>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="5000"
                stepPrecision = {0}
                duration={1250} />
              +</h1>
              <p className="ma0 tc pa0 tracked">參與者</p>
            </li>
          </ul>
        </div>
      )
    }
    render() {
      let num = null;
      if(this.state.num) num = this.numbers();
      var temp = this;
      $(window).scroll( function(){      
        if($('#animatedNumber2').length > 0) {
          var bottom_of_object = $('#animatedNumber2').offset().top + $('#animatedNumber2').outerHeight()/4;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
            if(!view) {
              temp.setState({num: true});
              view = true;
            }
          }
        }
      });
      var bgStyle = {
        backgroundImage: 'url(images/star-transparent.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };
      return ( 
        <section id="intro" className="fw-100 bg-primary"> 
          <div className="container center">
            <div className="cf flexbox">
              <div className="fl intro ma0 pt6-l pt5 ph4 pb5 bg-light-gray">
                <div className="ma0 hideme hidediv">
                  <h3 className="ma0 lh-title pb4-l pb3 fw6 tc">{section.title}</h3>
                  <p className="ma0 fw4 lh-large mw6 center">{section.content}</p>
                  <figure className="ma0 hideme hidediv tc pt3">
                    <img src="images/icons/g0v組成.png" width="420" alt="g0v-intro" />
                  </figure>
                </div>
              </div>
              <div className="fl intro ma0-l pt6-l pt5 ph4 pb5 bg-primary" id="animatedNumber2" style={bgStyle}>
                <div className="ma0 hideme hidediv">
                <h3 className="ma0 lh-title pb4-l pb3 fw6 white tc">{section.numbers}</h3>
                {num}
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      }
    }
export default Intro
