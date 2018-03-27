import React, { Component } from 'react'

var partnerListData = [
  {
    "name": "聯合報系願景工程",
    "description": "願景工程不只報導，還有行動，你我合作，正向改變。",
    "image": ["images/partners/logo-lian.svg"]
  },
  {
    "name": "台灣大哥大基金會",
    "description": "希望成為「數位匯流的領航者」，帶動公益科技化，使社會效益極大化。",
    "image": ["images/partners/logo-taiwan.svg"]
  },
  {
    "name": "前政委蔡玉玲律師",
    "description": "2013 年入閣擔任行政院政務委員，隔年結緣 g0v 並在黑客松提案，由 g0v 志工建置「vTaiwan」。",
    "image": ["images/partners/logo-yulin.svg"]
  },
  {
    "name": "Openfind",
    "description": "長期致力於網際網路相關技術研發，提供高品質、高穩定與高擴充性的軟體與服務。",
    "image": ["images/partners/logo-openfind.svg"]
  },
  {
    "name": "天氣風險管理開發",
    "description": "台灣第一家民間氣象公司，服務客戶跨及媒體、運輸、製造、物流、通路等超過 170 家企業。",
    "image": ["images/partners/logo-weather.svg"]
  },
  {
    "name": "開放文化基金會",
    "description": "藉由法人組織的力量，協助台灣開放源碼社群的推廣與倡議。",
    "image": ["images/partners/logo-ocf.svg"]
  }
]

class Partner extends Component {
  partner = (i) => {
    return (
      <div className="fl partners ma3 bg-white hidediv hideme br1">
        <div className="pa4">
          <figure className="center mb3">
            <img src={partnerListData[i].image[0]} height="80"/>
          </figure>
          <p className="ma0 tracked o-90 pt3 fw6">{partnerListData[i].name}</p>
          <p className="mw-320 center o-70 p-small ph2">{partnerListData[i].description}</p>
        </div>
      </div>
    )
  }
  render() {
    let partnerList = [];
    for(var i = 0; i < partnerListData.length; i++) {
      partnerList.push(this.partner(i));
    }
    return (
      <section className="fw-100 bg-light pv6-l pv5"> 
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">合作夥伴</h3>
          <div className="cf tc flexbox center mw74">
            {partnerList}
          </div>
        </div>
      </section>
    )
  }
}

export default Partner;