import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import Swiper from 'swiper';

var section =
{
  "title": "從 2012 到 2018， g0v 創造了…",
  "powerby": "揪松團在獎助金網站介紹徵件辦法、合作夥伴與獲獎專案一覽，獲獎專案網站或其他形式服務須至少在持續營運一年內註明 Powered by g0v，並連結回「Powered by g0v」頁面。"
}

var content = [
  {
    "title": "緣起",
    "content": "2012 年，g0v 台灣零時政府社群以「寫程式改造社會」為口號，強調開放透明、公民參與的精神，正式號召第一場活動。"
  },
  {
    "title": "成就",
    "content": "五年來，g0v 本著開放資料、開放政府的精神，已舉辦二十餘次百人大黑客松，超過五千人次參與，共同發想數百個專案，為全球前三大開放政府運動社群之一。"
  },
  {
    "title": "理念",
    "content": "不要問為什麼沒有人做這個，先承認你就是「沒有人」！社會問題不是別人的問題，而是身為公民的、我們的問題。"
  },
  {
    "title": "特色",
    "content": "不只寫程式，g0v 打造公民科技工具來促進公民參與的新實踐，所有成果都以開放授權的方式公開，任何人都可以直接使用、改作、加入協作或發展出更新的版本。"
  },
  {
    "title": "影響",
    "content": "這場開放資料、開放政府運動，也打破民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。"
  }
]

class Numbers extends Component {
    componentDidMount() {
      /* Init Swiper */
      var swiperPhoto = new Swiper('#swiperPhoto', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: 2500
      });
    }
    
    render() {
      var divStyle = {
        backgroundImage: 'url(images/numbers/g0v-06.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      };
      return ( 
         <section id="numbers" className="fw-100 bg-moon-gray relative">
          <div className="container center pv6-l pv5 relative">
            <div className="pa4 bg-white mw6 hideme hidediv mh6-l mh5-m mh4 z1 relative">
              <h3 className="ma0 lh-title pb3 fw5">{content[0].title}</h3>
              <p className="ma0 mw6 lh-copy fw4">{content[0].content}</p>
            </div>
            <div id="swiperPhoto" className="swiper-container center absolute">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={divStyle}></div>
                <div className="swiper-slide" style={divStyle}></div>
                <div className="swiper-slide" style={divStyle}></div>
              </div>
            </div>
          </div>
        </section>
        )
      }
    }
export default Numbers
