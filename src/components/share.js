import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { ParallaxBanner } from 'react-scroll-parallax';

var shareListData = [
  {
    "name": "CTA1",
    "description": "CTA1 Description CTA1 Description Description CTA1 Description",
    "action": "參加 g0v"
  },
  {
    "name": "CTA2",
    "description": "CTA2 Description CTA2 Description Description CTA2 Description",
    "action": "我要捐款"
  },
  {
    "name": "CTA3",
    "description": "CTA3 Description CTA3 Description Description CTA3 Description",
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

        