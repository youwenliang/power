import React, { Component } from 'react';
import Cover from './components/cover'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover />
        <section className="fw-100 bg-light-gray"> 
          <div className="container mw9 w-85 center pv4">
            <h1 className="ma0 mw6 lh-copy">自 2012 年以來，公民科技運動風起雲湧，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，以「寫程式改造社會」為口號，從此開始公民科技之火開始延燒，至今未歇。</h1>
          </div>
        </section>
        <section className="fw-100 bg-moon-gray"> 
          <div className="container mw9 w-85 center pv4">
            <p className="ma0">Section 2</p>
          </div>
        </section>
        <section className="fw-100 bg-light-gray"> 
          <div className="container mw9 w-85 center pv4">
            <p className="ma0">Section 3</p>
          </div>
        </section>
        <section className="fw-100 bg-moon-gray"> 
          <div className="container mw9 w-85 center pv4">
            <p className="ma0">Section 4</p>
          </div>
        </section>
        <section className="fw-100 bg-light-gray"> 
          <div className="container mw9 w-85 center pv4">
            <p className="ma0">Section 5</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
