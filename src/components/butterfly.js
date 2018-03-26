import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import AnimatedNumber from 'react-animated-number';
import $ from 'jquery';

class Butterfly extends Component {
    componentDidMount(){
      
    }
    numbers = () => {
      return (
        <div className="numbers fl w-100 w-50-l mt5 mt0-l">
          <div className="pt4-l center">
            <ul className="ma0 pa0 tc">
              <li className="dib ma2 w45 h45 tc bg-white pa2 hideme hidediv">
                <h5 className="ma0 tc pt3 tracked">提案</h5>
                <h1 className="ma0 tc di pr1">
                <AnimatedNumber component="text" value="151"
                  stepPrecision = {0}
                  duration={350} />
                </h1><span>件</span>
              </li>
              <li className="dib ma2 w45 h45 tc bg-white pa2 hideme hidediv">
                <h5 className="ma0 tc pt3 tracked">獲獎提案</h5>
                <h1 className="ma0 tc di pr1">
                <AnimatedNumber component="text" value="13"
                  stepPrecision = {0}
                  duration={550} />
                </h1><span>件</span>
              </li>
              <li className="dib ma2 w45 h45 tc bg-white pa2 hideme hidediv">
                <h5 className="ma0 tc pt3 tracked">媒體報導</h5>
                <h1 className="ma0 tc di pr1">
                <AnimatedNumber component="text" value="30"
                  stepPrecision = {0}
                  duration={750} />
                +</h1><span>篇</span>
              </li>
              <li className="dib ma2 w45 h45 tc bg-white pa2 hideme hidediv">
                <h5 className="ma0 tc pt3 tracked">獎金</h5>
                <h1 className="ma0 tc di pr1">
                <AnimatedNumber component="text" value="600"
                  stepPrecision = {0}
                  duration={950} />
                </h1><span>萬元</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
    render() {
      return ( 
        <section className="fw-100 bg-light-gray pv6-l pv5"> 
          <div className="container mw8 w-85 center">
            <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv">你有聽過蝴蝶效應嗎？</h3>
            <h5 className="ma0 lh-copy tc mw7 center fw4 f4-ns f5 o-80 mb5-l mb4 hideme hidediv">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h5>
            <figure className="w-100 h-480 bg-dark ma0 hideme hidediv"></figure>
            <div className="cf mt3">
              <div className="fl w-100 w-50-l">
                <div className="pa4-l hidediv hideme tc tl-l">
                  <p className="ma0 pt2 tl">
                    為鼓勵更多優秀人才投入公民科技領域、加速孵化更多成果，我們向國內外各大具社會影響力之媒體、科技產業、非政府組織募集「公民科技創新獎助金」，並從 g0v 零時政府揪松團設計一套參與、評選機制，來獎助具潛力且有助公共利益的專案，投入原型開發或維護營運。希望在黑客松的形式之外，促使更多公民科技專案成果能真正產生影響力，創造蝴蝶效應，並延伸出更多可能。
                  </p>
                  <a href="#" className="link btn ba b--dark bw1 dib center ph4 br1 dark hover-white relative overflow-hidden mt4">
                    <span className="btn-color bg-dark w-100 h-100 absolute"></span>
                    <p className="ma0 lh-title tc fw5 pv3 relative">
                      前往獎助金網站
                      <FontAwesome className="pl2" name='long-arrow-right'/>
                    </p>
                  </a>
                </div>
              </div>
              {this.numbers()}
            </div>
          </div>
        </section>
        )
      }
    }
export default Butterfly
