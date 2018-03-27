import React, { Component } from 'react'
import Swiper from 'swiper';
import $ from 'jquery';

var topicListData = [
  {
    "name": "科技與公益",
    "description": "科技陪公益走完最後一哩路",
    "content": "g0v 社群長期與公民團體站在同一個陣線，在開放資料與公眾參與的基礎上，降低議題的參與門檻，也累積議題的能量，讓公民團體與大眾更靠近。",
    "image": ["images/topography.svg"]
  },
  {
    "name": "開放政府",
    "description": "開放政府，民間續航",
    "content": "公民科技所作的事，就是讓公民把事情攤開來檢視，以「開放×資料×程式」的策略，從解決資訊落差開始，讓參與的層次前所未有的激發。",
    "image": ["images/topography.svg"]
  },
  {
    "name": "新資料",
    "description": "這樣也行！創新的資料收集大法",
    "content": "公民科技的介入，將資料從原本不易分享的型態解放出來，這個過程本身即是公民參與的實踐。",
    "image": ["images/topography.svg"]
  },
  {
    "name": "資料檢核",
    "description": "自媒體時代，資料查核與再加值",
    "content": "從單方向一元的傳播模式，走向多元分散式的結構化資料，新世代開發者嘗試在媒體領域走出一條新路，也應用在其他大量資料的領域。",
    "image": ["images/topography.svg"]
  },
  {
    "name": "社群基礎建設",
    "description": "前瞻也顧後，社群基礎建設整合公民科技力",
    "content": "g0v 揪松團從 2016 年開始推廣大家投入基礎建設工作，希望打造讓更多人投入協作、長期開發的公民科技生態系。",
    "image": ["images/topography.svg"]
  }
]

class Topics extends Component {
  componentDidMount() {
    /* Init Swiper */
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 1,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 100,
    });
    $('.slide').each(function(index){
      $(this).click(function(){
        swiper.slideTo(index+1);
      })
    })
  }
  topicIntro = (i) => {
    return (
      <li className="slide dib tc pa2 hideme hidediv relative w-third-l w-100 cp">
          <figure className="center mb4 dn db-l">
            <img src={topicListData[i].image[0]} height="175"/>
          </figure>
          <h1 className="absolute p-large o-10">{"0"+(i+1)}</h1>
          <h3 className="ma0 tracked o-90 pt3 fw6">{topicListData[i].name}</h3>
          <p className="mw-320 center o-70 ph2 mt4">{topicListData[i].description}</p>
      </li>
    )
  }
  topicContent = (i) => {
    return (
      <div className="swiper-slide ph5-l ph0 pt4-l">
        <div className="fl w-20-l w-100">
          <figure className="center">
            <img src={topicListData[i].image[0]} height="225"/>
          </figure>
        </div>
        <div className="fl w-80-l w-100 mw7-l ph4-l">
          <h1 className="mv0 o-20">{"0"+(i+1)}</h1>
          <h1 className="mv0">{topicListData[i].name}</h1>
          <h3 className="mv1 o-60">{topicListData[i].description}</h3>
          <p>{topicListData[i].content}</p>
        </div>
      </div>
    )
  }
  numbers = () => {
    let topicIntroList = [];
    for(var i = 0; i < topicListData.length; i++) {
      topicIntroList.push(this.topicIntro(i));
    }
    return (
      <div className="numbers fl w-100">
        <div className="pt4-l center">
          <ul className="ma0 pa0 tc center flexbox jcc">
            {topicIntroList}
          </ul>
        </div>
      </div>
    )
  }
  topics = () => {
    let topicSlide = [];
    for(var i = 0; i < topicListData.length; i++) {
      topicSlide.push(this.topicContent(i));
    }
    return topicSlide;
  }

  render() { 
    return (
      <section className="fw-100 bg-white pv6-l pv5"> 
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">五大主題</h3>
            <h5 className="ma0 lh-copy tc mw7 center fw4 f4-ns f5 o-70 mb5-l mb4 hideme hidediv">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h5>
          <div className="swiper-container center relative">
            <div className="swiper-wrapper">
              <div className="swiper-slide ph5-l ph0">
                {this.numbers()}
              </div>
              {this.topics()}
            </div>
            <div className="swiper-button-prev dn db-l"></div>
            <div className="swiper-button-next dn db-l"></div>
          </div>
          <div className="swiper-pagination mt3"></div>
        </div>
      </section>
    )
  }
}

export default Topics;