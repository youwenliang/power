import React, { Component } from 'react'

var projectListData = [
  {
    "name": "聯合報系願景工程",
    "description": "願景工程不只報導，還有行動，你我合作，正向改變。",
    "image": ["images/topography.svg","120", "120"]
  },
  {
    "name": "台灣大哥大基金會",
    "description": "希望成為「數位匯流的領航者」，帶動公益科技化，使社會效益極大化。",
    "image": ["images/topography.svg","120", "120"]
  },
  {
    "name": "前政委蔡玉玲律師",
    "description": "2014 年因為「vTaiwan 虛擬世界法規調適交流平台」與 g0v 結緣。任職政委期間致力推動虛擬世界發展相關法規。",
    "image": ["images/topography.svg","120", "120"]
  },
  {
    "name": "Openfind",
    "description": "長期致力於網際網路相關技術研發，提供高品質、高穩定與高擴充性的軟體與服務。",
    "image": ["images/topography.svg","120", "120"]
  }
]

class Projects extends Component {
  project = (i) => {
    var divStyle = {
      backgroundImage: 'url(' + projectListData[i].image[0] + ')',
      backgroundPosition: 'center center'
    };
    return (
      <div className="fl project ma3 cp">
        <div className="overflow-hidden center mt0 mb3 bg-white h5">
          <figure className="project-img w-100 h-100 ma0" style={divStyle}></figure>
        </div>
        <div className="pt0">
          <h4 className="ma0 white">{projectListData[i].name}</h4>
          <p className="white mt2">{projectListData[i].description}</p>
        </div>
      </div>
    )
  }
  
  render() { 
    let projectList = [];
    for(var i = 0; i < projectListData.length; i++) {
      projectList.push(this.project(i));
    }
    return (
      <section className="fw-100 bg-dark pv5-l pv4"> 
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw2 white">精選專案</h3>
          <h5 className="ma0 lh-copy pb4-l pb3 tc mw7 center fw4 white">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h5>
          <div className="cf flexbox center mw74">
            {projectList}
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;