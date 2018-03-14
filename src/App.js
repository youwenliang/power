import React, { Component } from 'react';
import Cover from './components/cover';
import Footer from './components/footer';
import FontAwesome from 'react-fontawesome';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
        <Cover />
        <section className="fw-100 bg-light-gray min-vh-100 pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <h2 className="ma0 mw6 lh-title pb4-l pb3 fw2">g0v 簡介</h2>
            <h5 className="ma0 mw6 lh-copy fw4">自 2012 年以來，公民科技運動風起雲湧，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，以「寫程式改造社會」為口號，從此開始公民科技之火開始延燒，至今未歇。</h5>
          </div>
        </section>
        <section className="fw-100 bg-moon-gray pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <div className="pa4 bg-white mw6">
              <h3 className="ma0 mw6 lh-title pb3-l pb2 fw2">g0v 簡介</h3>
              <h5 className="ma0 mw6 lh-copy fw4">自 2012 年以來，公民科技運動風起雲湧，以「寫程式改造社會」為口號，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，從此開始五年間，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台。這場開放資料、開放政府運動，也打破了民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。五年多來，g0v 揪松團已舉辦二十餘次百人大黑客松，超過五千人次參與。總共發想出了數百個專案，其中少數發展成真正具有社會影響力的成品。</h5>
            </div>
          </div>
        </section>
        <section className="fw-100 bg-light-gray pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <p className="ma0">Numbers</p>
          </div>
        </section>
        <section className="fw-100 bg-moon-gray pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <p className="ma0">Photos</p>
          </div>
        </section>
        <section className="fw-100 bg-light-gray min-vh-100 pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <h2 className="ma0 lh-title pb4-l pb3 tc fw2">你有聽過蝴蝶效應嗎？</h2>
            <h4 className="ma0 lh-copy tc mw7 center fw4">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h4>
          </div>
        </section>
        <section className="fw-100 bg-moon-gray min-vh-100 pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <h2 className="ma0 lh-title pb4-l pb3 tc fw2">精選專案</h2>
            <h4 className="ma0 lh-copy tc mw7 center fw4">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h4>
          </div>
        </section>
        <section className="fw-100 bg-white min-vh-100 pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <h2 className="ma0 lh-title pb4-l pb3 tc fw2">五大主題</h2>
            <h4 className="ma0 lh-copy tc mw7 center fw4">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h4>
          </div>
        </section>
        <section className="fw-100 bg-light-gray pv5-l pv4"> 
          <div className="container mw9 w-85 center">
            <h2 className="ma0 lh-title pb4-l pb3 tc fw2">合作夥伴</h2>
            <div className="mw9 center ph3-ns">
              <div className="cf ph2-ns">
                <div className="fl w-100 w-third-l w-50-m pa3 hidediv hideme">
                  <div className="bg-white pa4 h-320">
                    <a href="#" className="u-line moon-gray dib relative">連結</a>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-50-m pa3 hidediv hideme">
                  <div className="bg-white pa4 h-320">
                    <a href="#" className="u-line moon-gray dib relative">連結</a>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-50-m pa3 hidediv hideme">
                  <div className="bg-white pa4 h-320">
                    <a href="#" className="u-line moon-gray dib relative">連結</a>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-50-m pa3 hidediv hideme">
                  <div className="bg-white pa4 h-320">
                    <a href="#" className="u-line moon-gray dib relative">連結</a>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-50-m pa3 hidediv hideme">
                  <div className="bg-white pa4 h-320">
                    <a href="#" className="u-line moon-gray dib relative">連結</a>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-50-m pa3 hidediv hideme">
                  <div className="bg-white pa4 h-320">
                    <a href="#" className="u-line moon-gray dib relative">連結</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fw-100 bg-gray"> 
          <div className="cf">
            <div className="fl w-100 w-third-ns">
              <div className="bg-white pa4 h-480 hover-bg-gray bg-animate tc">
                <a href="#" className="link btn ba b--moon-gray bw1 dib center ph4 br1 moon-gray hover-black relative overflow-hidden">
                  <span className="btn-color bg-moon-gray w-100 h-100 absolute"></span>
                  <p className="ma0 lh-title tc fw4 pv3 relative">
                    參加 g0v
                  </p>
                </a>
              </div>
            </div>
            <div className="fl w-100 w-third-ns">
              <div className="bg-white pa4 h-480 hover-bg-gray bg-animate tc">
                <a href="#" className="link btn ba b--moon-gray bw1 dib center ph4 br1 moon-gray hover-black relative overflow-hidden">
                  <span className="btn-color bg-moon-gray w-100 h-100 absolute"></span>
                  <p className="ma0 lh-title tc fw4 pv3 relative">
                    我要捐款
                  </p>
                </a>
              </div>
            </div>
            <div className="fl w-100 w-third-ns">
              <div className="bg-white pa4 h-480 hover-bg-gray bg-animate tc">
                <a href="#" className="link btn ba b--moon-gray bw1 dib center ph4 br1 moon-gray hover-black relative overflow-hidden">
                  <span className="btn-color bg-moon-gray w-100 h-100 absolute"></span>
                  <p className="ma0 lh-title tc fw4 pv3 relative">
                    下載資料
                  </p>
                </a>
              </div>
            </div>
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
              <p className="ma0 lh-title tc fw4 pv3 relative">
                <FontAwesome className="pr2" name='facebook-square'/>
                分享到 Facebook
              </p>
            </a>
          </div>
        </ParallaxBanner>
        <Footer />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
