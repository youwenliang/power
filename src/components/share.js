import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { ParallaxBanner } from 'react-scroll-parallax';

var shareListData = [
  {
    "name": "聯合報系願景工程",
    "description": "願景工程不只報導，還有行動，你我合作，正向改變。",
    "action": "參加 g0v"
  },
  {
    "name": "台灣大哥大基金會",
    "description": "希望成為「數位匯流的領航者」，帶動公益科技化，使社會效益極大化。",
    "action": "我要捐款"
  },
  {
    "name": "前政委蔡玉玲律師",
    "description": "2014 年因為「vTaiwan 虛擬世界法規調適交流平台」與 g0v 結緣。",
    "action": "下載資料"
  }
]

class Share extends Component {
  share = (i) => {
    return (
      <div className="push fl relative">
        <span className="bg-white w-100 h-100 absolute showdiv showme-expand-y delay"></span>
        <span className="bg-dark w-100 h-100 absolute showdiv showme-expand-y"></span>
        <div className="bg-white pa5-l pa4 hover-bg-light-gray bg-animate tc">
          <figure className="mb4 w3 h3 bg-dark center"></figure>
          <h5 className="ma0">{shareListData[i].name}</h5>
          <p className="mw-320 mb4 center">{shareListData[i].description}</p>
          <a href="#" className="link btn ba b--dark bw1 dib center ph4 br1 dark hover-white relative overflow-hidden">
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
        <section className="fw-100 bg-white"> 
          <div className="cf flexbox">
            {shareList}
          </div>
        </section>
        <ParallaxBanner
          className="fw-100 bg-dark pv5-l pv4"
          layers={[
              {
                  image: 'images/topography.svg',
                  amount: 1,
                  slowerScrollRate: false,
              }
          ]}
          style={{
              height: 'auto',
          }}
        >
          <div className="container mw9 w-85 tc center">
            <a href="#" className="link btn ba b--white bw1 dib center ph4 br1 white hover-black relative overflow-hidden">
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

        