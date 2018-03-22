import React, { Component } from 'react'

var projectListData = [
  {
    "name": "遺落在世界的國家寶藏",
    "description": "二十字的簡介二十字的簡介二十字的簡介簡介",
    "image": ["images/topography.svg","120", "120"]
  },
  {
    "name": "阿龜微氣候天眼通",
    "description": "二十字的簡介二十字的簡介二十字的簡介簡介",
    "image": ["images/topography.svg","120", "120"]
  },
  {
    "name": "真的假的 LINE bot",
    "description": "二十字的簡介二十字的簡介二十字的簡介簡介",
    "image": ["images/topography.svg","120", "120"]
  },
  {
    "name": "阿龜誌—農務紀錄好幫手",
    "description": "二十字的簡介二十字的簡介二十字的簡介簡介",
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
      <div className="fl project ma3 cp hideme-more hidediv">
        <div className="overflow-hidden center mt0 mb3 bg-white h5 relative">
          <span className="bg-dark-black w-100 h-100 absolute showdiv showme-expand-y"></span>
          <figure className="project-img w-100 h-100 ma0" style={divStyle}></figure>
        </div>
        <div className="pt0 pl5 dash">
          <h4 className="ma0 white hideme hidediv">{projectListData[i].name}</h4>
          <p className="white mt2 hideme hidediv">{projectListData[i].description}</p>
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
      <section className="fw-100 bg-dark pv6-l pv5"> 
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw2 white">精選專案</h3>
          <h5 className="ma0 lh-copy tc mw7 center fw4 white mb5">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h5>
          <div className="cf flexbox center mw74">
            {projectList}
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;