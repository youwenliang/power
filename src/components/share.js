import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { ParallaxBanner } from 'react-scroll-parallax';

var section =
{
  "title": "參與更多行動",
  "tagline": "邀請你與我們一起，締造更多蝴蝶效應！" 
}

var shareListData = [
  {
    "name": "報名黑客松",
    "description": "想找地方揮灑熱血嗎？揪松網歡迎你！",
    "action": "瞭解更多"
  },
  {
    "name": "贊助獎助金",
    "description": "贊助一份力量，實現更多可能！",
    "action": "我要捐款"
  },
  {
    "name": "下載最新年鑑",
    "description": "最新 2017 獎助金年鑑，歡迎取用！",
    "action": "馬上下載"
  }
]

class Share extends Component {
  share = (i) => {
    return (
      <div className="push fl relative">
        <span className="bg-white w-100 h-100 absolute showdiv showme-expand-y delay"></span>
        <span className="bg-primary w-100 h-100 absolute showdiv showme-expand-y"></span>
        <div className="bg-white pv4 hover-bg-light-gray bg-animate tc">
          <figure className="mb2 center">
            <img src={"images/icons/CTA"+shareListData[i].name+".png"} width="200" alt={shareListData[i].name}/>
          </figure>
          <h5 className="ma0">{shareListData[i].name}</h5>
          <p className="mw-320 mb4 center tc ph4 h2">{shareListData[i].description}</p>
          <a href="/" className="link btn ba b--dark bw1 dib center ph4 br1 mb3 dark btn-hover-white relative overflow-hidden">
            <span className="btn-color bg-dark w-100 h-100 absolute"></span>
            <p className="ma0 lh-title tc fw5 pv3 relative">
              {shareListData[i].action}
              <FontAwesome className="pl2" name='long-arrow-right'/>
            </p>
          </a>
        </div>
      </div>
    )
  }
  render() {
    let shareList = [];
    for(var i = 0; i < shareListData.length; i++) {
      shareList.push(this.share(i));
    }
    return (
      <div>
        <section id="share" className="fw-100 bg-white pt5"> 
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">{section.title}</h3>
          <h5 className="ma0 lh-copy tc mw7 center fw4 f4-l f5 o-70 mb4 hideme hidediv">{section.tagline}</h5>
          <div className="cf flexbox">
            {shareList}
          </div>
        </section>
        <ParallaxBanner
          className="fw-100 bg-dark pv5"
          layers={[
              {
                  image: 'images/star.png',
                  amount: 1,
                  slowerScrollRate: false,
              }
          ]}
          style={{
              height: '184px',
          }}
        >
          <div className="container mw9 w-85 tc center">
            <a href="/" className="link btn ba b--white bw1 dib center ph4 br1 white btn-hover-black relative overflow-hidden">
              <span className="btn-color bg-white w-100 h-100 absolute"></span>
              <p className="ma0 lh-title tc fw5 pv3 relative">
                <FontAwesome className="pr2" name='facebook-square'/>
                分享到 Facebook
              </p>
            </a>
          </div>
        </ParallaxBanner>
      </div>
    )
  }
}

export default Share;

        