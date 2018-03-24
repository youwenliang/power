import React, { Component } from 'react'

var projectListData = [
  {
    "name": "阿龜微氣候天眼通",
    "description": "自製田間土壤、氣象感測器，配合數據分析，讓小農更聰明地看天吃飯。",
    "image": ["images/projects/cover-turt.png"]
  },
  {
    "name": "真的假的 LINE BOT",
    "description": "用聊天機器人和群眾協作查核澄清 Line 封閉群組中的不實資訊。",
    "image": ["images/projects/cover-line.jpg"]
  },
  {
    "name": "OPEN 集團",
    "description": "「OPEN 集團」梳理出公司所屬集團的關係圖，再串聯「透明足跡」的污染排放資料，讓民眾以集團為單位去檢視排放汙染的企業體，以此向有違規紀錄的集團施壓，同時呼籲政府正視現行法律的不足。",
    "image": ["images/projects/cover-turt.png"]
  },
  {
    "name": "國家寶藏",
    "description": "藉由遊戲化的群眾外包，翻拍遺落在海外的台灣相關史料，最後將圖檔文字數位化，建立數位開放的台灣史資料庫。",
    "image": ["images/projects/cover-treat.jpg"]
  }
]

class Projects extends Component {
  project = (i) => {
    var divStyle = {
      backgroundImage: 'url(' + projectListData[i].image[0] + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    return (
      <div className="fl project ma3 cp hideme-more hidediv">
        <div className="overflow-hidden center mt0 mb3 bg-white h5 relative br1">
          <span className="bg-dark-black w-100 h-100 absolute showdiv showme-expand-y"></span>
          <figure className="project-img w-100 h-100 ma0" style={divStyle}></figure>
        </div>
        <div className="pt0 pl5 dash hideme hidediv">
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
      <section className="fw-100 bg-dark pv6-l pv5"> 
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 white hideme hidediv">精選專案</h3>
          <h5 className="ma0 lh-copy tc mw7 center fw4 f4-ns f5 white mb5-l mb4 hideme hidediv">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h5>
          <div className="cf flexbox center mw74">
            {projectList}
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;