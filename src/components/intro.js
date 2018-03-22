import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';

class Intro extends Component {
    componentDidMount(){
      
    }
    render() {
      return ( 
        <section className="fw-100 bg-light-gray min-vh-100 pv6-l pv5"> 
          <div className="container mw9 w-85 center">
            <h2 className="ma0 mw6 lh-title pb4-l pb3 fw2">g0v 簡介</h2>
            <h5 className="ma0 mw6 lh-copy fw4">自 2012 年以來，公民科技運動風起雲湧，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，以「寫程式改造社會」為口號，從此開始公民科技之火開始延燒，至今未歇。</h5>
          </div>
        </section>
        )
      }
    }
export default Intro
