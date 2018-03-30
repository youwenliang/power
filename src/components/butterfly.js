import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import AnimatedNumber from 'react-animated-number';

var section =
{
  "title": "準備好，見證一場「蝴蝶效應」！",
  "tagline": "蝴蝶效應(Butterfly effect)，指一個微小的變化，就能帶動整個系統的巨大連鎖反應。",
  "intro": "我們是 g0v，一直相信，每一個公民科技好點子背後的創意與力量，都像是一隻輕拍翅膀的蝴蝶，若能導入持續開發、長期營運的人力與資源，就能引發蝴蝶效應，產生足以扭轉未來的成果。",
  "contentTitle": "什麼是「公民科技創新獎助金」？",
  "content": "為鼓勵更多優秀人才投入公民科技領域、加速孵化更多成果，g0v 向國內外各大具社會影響力之媒體、科技產業、非政府組織募集「公民科技創新獎助金」，並從 g0v 零時政府揪松團設計一套參與、評選機制，來獎助具潛力且有助公共利益的專案，投入原型開發或維護營運。希望在黑客松的形式之外，促使更多公民科技專案成果能真正產生影響力，創造蝴蝶效應，並延伸出更多可能。"
}

class Butterfly extends Component {
    numbers = () => {
      return (
        <div className="numbers fl w-100 w-50-l mt5 mt0-l">
          <div className="pt4-l center">
            <ul className="ma0 pa0 tc">
              <li className="dib ma2 w45 h45 tc bg-white pa2 hideme hidediv">
                <h5 className="ma0 tc pt3 tracked">累積總提案</h5>
                <h1 className="ma0 tc di pr1">
                <AnimatedNumber component="text" value="151"
                  stepPrecision = {0}
                  duration={350} />
                </h1><span>件</span>
              </li>
              <li className="dib ma2 w45 h45 tc bg-white pa2 hideme hidediv">
                <h5 className="ma0 tc pt3 tracked">已獲獎專案</h5>
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
                <h5 className="ma0 tc pt3 tracked">已發放獎金</h5>
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
        <section id="butterfly" className="fw-100 bg-light-gray pv6-l pv5"> 
          <div className="container mw8 w-85 center">
            <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">{section.title}</h3>
            <p className="ma0 lh-copy tc fw4 mb4 hideme hidediv">{section.tagline}</p>
            <h5 className="ma0 lh-copy tl mw7 center fw4 f4-ns f5 o-70 mb5-l mb4 hideme hidediv">{section.intro}</h5>
            <figure className="w-100 tc ma0 hideme hidediv">
              <img src="images/butterfly.png" width="100%" alt="butterfly" />
            </figure>
            <div className="cf mt3">
              <div className="fl w-100 w-50-l">
                <div className="pa4-l hidediv hideme tc tl-l">
                  <h5 className="mv3">{section.contentTitle}</h5>
                  <p className="ma0 pt2 tl">
                    {section.content}
                  </p>
                  <a href="https://grants.g0v.tw/" target="_blank" rel="noopener noreferrer" className="link btn ba b--dark bw1 dib center ph4 br1 dark btn-hover-white relative overflow-hidden mt4">
                    <span className="btn-color bg-dark w-100 h-100 absolute"></span>
                    <p className="ma0 lh-title tc fw5 pv3 relative">
                      瀏覽獎助金官方網站
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
