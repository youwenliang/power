import React, { Component } from 'react'

var section =
{
  "title": "Partners",
  "powerby": "Projects that receive an award need to mark their website with a \"powered by g0v\" insignia, and link back to the \"powered by g0v\" official website for at least one year. "
}

var partnerListData = [
  {
    "name": "Vision Project, United Daily News Group",
    "description": "\"Vision Project\" isn't just news, it's a call to action. Let's cooperate to make positive change. ",
    "image": ["images/partners/logo-lian.svg"]
  },
  {
    "name": "Taiwan Mobile Foundation",
    "description": "We hope to become the leader in digital convergence and promote public welfare with technology in order to maximize social benefits.",
    "image": ["images/partners/logo-taiwan.svg"]
  },
  {
    "name": "Former Minister without Portfolio and lawyer Jaclyn Tsai",
    "description": "Ms. Tsai joined the Executive Yuan as Minister without Portfolio in 2013. She proposed the \"vTaiwan\" platform at a g0v hackathon in 2014, and worked with g0v volunteers to co-create the platform. ",
    "image": ["images/partners/logo-yulin.svg"]
  },
  {
    "name": "Openfind",
    "description": "Openfind is committed to Internet-related technology R&D, and provide high quality, stable, and scalable software and services.",
    "image": ["images/partners/logo-openfind.svg"]
  },
  {
    "name": "Weatherrisk",
    "description": "Weatherrisk is the first private weather company in Taiwan, serving customers at more than 170 companies across media, transportation, manufacturing, logistics, and distributing.",
    "image": ["images/partners/logo-weather.svg"]
  },
  {
    "name": "Open Culture Foundation",
    "description": "OCF supports local communities advocate for the use of open technologies in a broad range of sectors, including open source software, open hardware, and open data.",
    "image": ["images/partners/logo-ocf.svg"]
  }
]

class Partner extends Component {
  partner = (i) => {
    return (
      <div className="fl partners ma3 bg-white hidediv hideme br1">
        <div className="pa4">
          <figure className="center mb3">
            <img src={partnerListData[i].image[0]} height="100" alt={partnerListData[i].name} />
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
      <section id="partner" className="fw-100 bg-light pb6-l pb5">
        <div className="mb6-l mb5 pv5 bg-dark">
          <div className="mw8 w-85 center">
            <div className="cf">
              <div className="fl w-25-l w-100 ma0 pa3 tc-ns hideme hidediv">
                <img src="images/powered-by-g0v.svg" height="57" alt="g0v-poweredby" />
              </div>
              <div className="fl w-75-l w-100 ma0 pa3 hideme hidediv white">
                <p className="fw4 ma0 pa0 lh-large">{section.powerby}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">{section.title}</h3>
          <div className="cf tc flexbox center mw74">
            {partnerList}
          </div>
        </div>
      </section>
    )
  }
}

export default Partner;