import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import AnimatedNumber from 'react-animated-number';
import { Parallax } from 'react-scroll-parallax';
import Swiper from 'swiper';
import $ from 'jquery';

class Numbers extends Component {
    componentDidMount() {
      var photoNum = 5;
      var over = $('.hover-scroll li').width()*5 - $(window).width();
    }
    numbers = () => {
      return (
        <div className="center">
          <ul className="ma0 pa0 tc">
            <li className="dib ma0 w48 h45 tc white ph3 hideme hidediv br-ns b--white-20 bn">
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
            <li className="dib ma0 w48 h45 tc white ph3 hideme hidediv br-ns b--white-20 bn">
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
            <li className="dib ma0 w48 h45 tc white ph3 hideme hidediv br-ns b--white-20 bn">
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
            <li className="dib ma0 w48 h45 tc white ph3 hideme hidediv br-ns b--white-20 bn">
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
            <li className="dib ma2 w48 h45 tc white ph3 hideme hidediv">
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
         <section className="fw-100 bg-moon-gray relative"> 
          <div className="container mw9 w-85 center pv6-l pv5">
            <div className="pa4 bg-white mw6">
              <h3 className="ma0 mw6 lh-title pb3-l pb2 fw2">g0v 簡介</h3>
              <p className="ma0 mw6 lh-copy fw4">自 2012 年以來，公民科技運動風起雲湧，以「寫程式改造社會」為口號，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，從此開始五年間，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台。這場開放資料、開放政府運動，也打破了民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。五年多來，g0v 揪松團已舉辦二十餘次百人大黑客松，超過五千人次參與。總共發想出了數百個專案，其中少數發展成真正具有社會影響力的成品。</p>
            </div>
          </div>
          <div className="fw-100 bg-dark pv5-l pv4"> 
            <div className="container mw9 w-85 center">
              {this.numbers()}
            </div>
          </div>
          <div className="fw-100 bg-moon-gray"> 
            <div className="ma0 pa0 overflow-hidden hover-scroll">
              <div className="hover-scroll-next pa0 ma0"></div>
              <div className="hover-scroll-prev pa0 ma0"></div>
              <ul className="list ma0 pa0 nowrap overflow-x-scroll overflow-y-hidden h-480">
                <li className="dib">
                <Parallax
                    className="ma0 pa0"
                    offsetYMax={-10}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img src="images/topography.svg" height="600"/>
                </Parallax>
                </li>
                <li className="dib">
                <Parallax
                    className="ma0 pa0"
                    offsetYMax={-10}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img src="images/topography.svg" height="600"/>
                </Parallax>
                </li>
                <li className="dib">
                <Parallax
                    className="ma0 pa0"
                    offsetYMax={-10}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img src="images/topography.svg" height="600"/>
                </Parallax>
                </li>
                <li className="dib">
                <Parallax
                    className="ma0 pa0"
                    offsetYMax={-10}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img src="images/topography.svg" height="600"/>
                </Parallax>
                </li>
                <li className="dib">
                <Parallax
                    className="ma0 pa0"
                    offsetYMax={-10}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img src="images/topography.svg" height="600"/>
                </Parallax>
                </li>
              </ul>
            </div>
          </div>
        </section>
        )
      }
    }
export default Numbers
