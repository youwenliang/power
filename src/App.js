import React, { Component } from 'react';
import Cover from './components/cover';
import Footer from './components/footer';
import Partner from './components/partner';
import Topics from './components/topics';
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
        <section className="fw-100 bg-moon-gray"> 
          <div className="container mw9 w-85 center pv5-l pv4">
            <div className="pa4 bg-white mw6">
              <h3 className="ma0 mw6 lh-title pb3-l pb2 fw2">g0v 簡介</h3>
              <p className="ma0 mw6 lh-copy fw4">自 2012 年以來，公民科技運動風起雲湧，以「寫程式改造社會」為口號，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，從此開始五年間，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台。這場開放資料、開放政府運動，也打破了民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。五年多來，g0v 揪松團已舉辦二十餘次百人大黑客松，超過五千人次參與。總共發想出了數百個專案，其中少數發展成真正具有社會影響力的成品。</p>
            </div>
          </div>
          <div className="fw-100 bg-light-gray pv5-l pv4"> 
            <div className="container mw9 w-85 center">
              <p className="ma0">Numbers</p>
            </div>
          </div>
          <div className="fw-100 bg-moon-gray pv5-l pv4"> 
            <div className="container mw9 w-85 center">
              <p className="ma0">Photos</p>
            </div>
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
        <Topics/>
        <Partner/>
        <section className="fw-100 bg-white"> 
          <div className="cf flexbox">
            <div className="push fl relative">
              <span className="bg-white w-100 h-100 absolute showdiv showme-expand-y delay"></span>
              <span className="bg-dark w-100 h-100 absolute showdiv showme-expand-y"></span>
              <div className="bg-white pa5-l pa4 hover-bg-moon-gray bg-animate tc">
                <figure className="center mb4 w4 h4 bg-dark"></figure>
                <h5 className="ma0">測試測試</h5>
                <p className="mw-320 center mb4">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                <a href="#" className="link btn ba b--dark bw1 dib center ph4 br1 dark hover-white relative overflow-hidden">
                  <span className="btn-color bg-dark w-100 h-100 absolute"></span>
                  <p className="ma0 lh-title tc fw5 pv3 relative">
                    參加 g0v
                    <FontAwesome className="pl2" name='long-arrow-right'/>
                  </p>
                </a>
              </div>
            </div>
            <div className="push fl relative">
              <span className="bg-white w-100 h-100 absolute showdiv showme-expand-y delay"></span>
              <span className="bg-dark w-100 h-100 absolute showdiv showme-expand-y"></span>
              <div className="bg-white pa5-l pa4 hover-bg-moon-gray bg-animate tc">
                <figure className="center mb4 w4 h4 bg-dark"></figure>
                <h5 className="ma0">測試測試</h5>
                <p className="mw-320 center mb4">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                <a href="#" className="link btn ba b--dark bw1 dib center ph4 br1 dark hover-white relative overflow-hidden">
                  <span className="btn-color bg-dark w-100 h-100 absolute"></span>
                  <p className="ma0 lh-title tc fw5 pv3 relative">
                    我要捐款
                    <FontAwesome className="pl2" name='long-arrow-right'/>
                  </p>
                </a>
              </div>
            </div>
            <div className="push fl relative">
              <span className="bg-white w-100 h-100 absolute showdiv showme-expand-y delay"></span>
              <span className="bg-dark w-100 h-100 absolute showdiv showme-expand-y"></span>
              <div className="bg-white pa5-l pa4 hover-bg-moon-gray bg-animate tc">
                <figure className="center mb4 w4 h4 bg-dark"></figure>
                <h5 className="ma0">測試測試</h5>
                <p className="mw-320 center mb4">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                <a href="#" className="link btn ba b--dark bw1 dib center ph4 br1 dark hover-white relative overflow-hidden">
                  <span className="btn-color bg-dark w-100 h-100 absolute"></span>
                  <p className="ma0 lh-title tc fw5 pv3 relative">
                    下載資料
                    <FontAwesome className="pl2" name='long-arrow-right'/>
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
              <p className="ma0 lh-title tc fw5 pv3 relative">
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
