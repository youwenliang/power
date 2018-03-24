import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';

class Intro extends Component {
    componentDidMount(){
      
    }
    render() {
      return ( 
        <section className="fw-100 bg-light-gray min-vh-100 pv6-l pv5"> 
          <div className="container mw9 w-85 center">
            <div className="fl w-40-l w-100 ma0 hideme hidediv">
              <h2 className="ma0 lh-title pb4-l pb3 fw2">g0v 簡介</h2>
              <h5 className="ma0 lh-copy fw4">g0v.tw 是一個推動資訊透明化的社群，致力於開發公民參與社會的資訊平台與工具。將 gov 以「零」替代成為 g0v，從零重新思考政府的角色，也是代表數位原生世代從 0 與 1 世界的視野。g0v.tw 以開放原始碼的精神為基底，關心言論自由、資訊開放，寫程式提供公民容易使用的資訊服務。資訊的透明化能幫助公民更確實了解政府運作、更快速了解議題，不被媒體壟斷，也才可有效監督政府，化為參與行動最終深化民主體質。</h5>
            </div>
            <div className="fl w-60-l w-100 ma0-l mt4 pl5-l hideme hidediv">
              <figure className="w-100 h-480 bg-dark ma0 hideme hidediv"></figure>
            </div>
          </div>
        </section>
        )
      }
    }
export default Intro
