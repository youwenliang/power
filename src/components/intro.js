import React, { Component } from 'react'
import AnimatedNumber from 'react-animated-number';

var section =
{
  "title": "g0v 簡介",
  "numbers": "從 2012 到 2018， g0v 創造了…",
  "content": "g0v.tw 是一個推動資訊透明化的社群，以開放原始碼的精神為基底，致力於開發公民參與社會的資訊平台與工具。將 gov 以「零」替代成為 g0v，從零重新思考政府的角色，也是代表數位原生世代從 0 與 1 世界的視野。"
}

class Intro extends Component {
    componentDidMount(){
      
    }
    numbers = () => {
      return (
        <div className="center">
          <ul className="ma0 pa0 tc">
            <li className="dib ma0 w48 tc white ph3 hideme hidediv">
              <h1 className="ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="29"
                style={{
                  fontSize: 60
                }}
                stepPrecision = {0}
                duration={750} />
              </h1><span>次</span>
              <p className="ma0 tc pa0 tracked">黑客松</p>
            </li>
            <li className="dib ma0 w48 tc white ph3 hideme hidediv">
              <h1 className="ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="3"
                style={{
                  fontSize: 60
                }}
                stepPrecision = {0}
                duration={790} />
              </h1><span>次</span>
              <p className="ma0 tc pa0 tracked">國際雙年會</p>
            </li>
            <li className="dib ma0 w48 tc white ph3 hideme hidediv">
              <h1 className="ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="517"
                style={{
                  fontSize: 60
                }}
                stepPrecision = {0}
                duration={830} />
              </h1><span>次</span>
              <p className="ma0 tc pa0 tracked">正式提案</p>
            </li>
            <li className="dib ma0 w48 tc white ph3 hideme hidediv">
              <h1 className="ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="304"
                style={{
                  fontSize: 60
                }}
                stepPrecision = {0}
                duration={870} />
              </h1><span>位</span>
              <p className="ma0 tc pa0 tracked">坑主</p>
            </li>
            <li className="dib ma2 w48 tc white ph3 hideme hidediv">
              <h1 className="ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="5000"
                style={{
                  fontSize: 60
                }}
                stepPrecision = {0}
                duration={910} />
              +</h1>
              <p className="ma0 tc pa0 tracked">參與者</p>
            </li>
          </ul>
        </div>
      )
    }
    render() {
      return ( 
        <section id="intro" className="fw-100 bg-light-gray"> 
          <div className="container center">
            <div className="cf">
              <div className="fl w-50-l w-100 ma0 hideme hidediv pa6-l pa5">
                <h3 className="ma0 lh-title pb4-l pb3 fw6">{section.title}</h3>
                <h5 className="ma0 lh-copy fw4">{section.content}</h5>
                <figure className="ma0 hideme hidediv">
                  <img src="images/intro.png" alt="g0v-intro" />
                </figure>
              </div>
              <div className="fl w-50-l w-100 ma0-l mt4 pa6-l pa5 bg-dark hideme hidediv">
                <h3 className="ma0 lh-title pb4-l pb3 fw6 white">{section.numbers}</h3>
                {this.numbers()}
              </div>
            </div>
          </div>
        </section>
        )
      }
    }
export default Intro
