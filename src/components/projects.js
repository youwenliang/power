import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import $ from 'jquery';

var modalId = "";

var projectListData = [
  {
    "name": "阿龜微氣候天眼通",
    "description": "自製田間土壤、氣象感測器，配合數據分析，讓小農更聰明地看天吃飯。",
    "image": ["images/projects/cover-turt.png"],
    "insight": "不開放的農業資料讓第一線的農民極度缺乏田間微氣候的即時資料，加上負擔不了昂貴的設備，台灣的小農因此難以科學耕作。",
    "idea": "吳君孝與長期參與開源社群的科技農夫陳幸延，成立「阿龜微氣候天眼通」，自製田間土壤感測器、氣象盒子收集農業數據，並將接收到的環境數據彙整到儀表板，方便農友掌握即時田間狀況。",
    "impact": "拿到 g0v 獎助金後，原本只有兩三人的阿龜核心團隊，一個月內迅速成長至十幾人，並以「阿龜誌」拿到第二次 g0v 獎助金，接著開發田間紀錄日誌 app，持續以農業資料為基底，架起一座橫跨農民與專家學者的橋樑。阿龜團隊開發成功的能量也回饋給 Open Hack Farm 社群，以開源科技深耕在地農業。"
  },
  {
    "name": "真的假的 LINE BOT",
    "description": "用聊天機器人和群眾協作查核澄清 Line 封閉群組中的不實資訊。",
    "image": ["images/projects/cover-line.jpg"],
    "insight": "如果說上個世代以政黨顏色區分彼此的小圈圈，那麼這個時代，社交網站就成了新的小圈圈，亦稱同溫層。同溫層不只是取暖、討拍的地方，如今更變成假消息散布的管道、激起衝突以造成動員的場域。現在有許多謠言透過 Line 散佈，這些謠言可能是錯誤的知識、詐騙、蓄意引導，嚴重時甚至會影響大家的生活。",
    "idea": "「真的假的 LINE Bot」是讓不擅於使用 Google，資訊搜尋能力較低的使用者，可以在加入「真的假的 LINE Bot」之後，遇上任何 LINE 上不知真假的訊息時，直接轉發給機器人，接著就會收到回覆，判斷訊息的真假。",
    "impact": "真的假的團隊曾參與國家傳播委員會（NCC）關於假新聞的討論，並至新加坡、南非等地參與公民科技論壇，展現專案在資訊查核相關領域的社會影響力。目前約 2 萬人加入「真的假的 LINE Bot」 LINE 好友，每週有將近 200 篇文章回報，300 位編輯加入線上闢謠。"
  },
  {
    "name": "OPEN 集團",
    "description": "「OPEN 集團」梳理出公司所屬集團的關係圖，再串聯「透明足跡」的污染排放資料，讓民眾以集團為單位去檢視排放汙染的企業體，以此向有違規紀錄的集團施壓，同時呼籲政府正視現行法律的不足。",
    "image": ["images/projects/cover-turt.png"],
    "insight": "曾有集團五年來因排放廢棄物僅被開罰 3700 多萬，造成的廢水汙染讓政府投資治水的 37 億元前功盡棄，但該集團卻在五年間享有 29.96 億元的租稅減免。罰款金額相較於補貼獎勵，根本不值一提，導致違規企業屢屢以消耗環境的外部成本為代價，持續追逐高額利潤。",
    "idea": "為了與「透明足跡」的污染裁罰紀錄整併，團隊將 g0v 專案「台灣公司資料」與「OPEN 集團」的資料兩相比對，找出各公司行號的統一編號，歷經半年開發，匯入 2013-2016 四年間的資料，總計超過 1400 個集團、3 萬個公司統一編號。",
    "impact": "OPEN 集團強調「讓企業負起更多責任」，期許透過開放資訊的力量，讓汙染現形，從此民眾不再只能被動等待政府開罰，可以根據實際數據監督違法企業、向政府反映，提醒企業應負起的環境責任。"
  },
  {
    "name": "國家寶藏",
    "description": "藉由遊戲化的群眾外包，翻拍遺落在海外的台灣相關史料，最後將圖檔文字數位化，建立數位開放的台灣史資料庫。",
    "image": ["images/projects/cover-treat.jpg"],
    "insight": "美國國家檔案館目前解密開放約六千萬筆、尚未數位化的台灣史料檔案，要看內容必須親自前往位於華盛頓 DC 或是馬里蘭的美國國家檔案館調閱檔案。相較於日本政府委託一個十人上下的專業團隊在美國國家檔案館翻拍十幾年，國家寶藏團隊想問的是：「政府不做，有沒有可能全民一起做『數位翻拍』？」",
    "idea": "國家寶藏團隊找來設計師、工程師，開發翻拍檔案 APP，讓志工像玩遊戲一般，自動指派翻拍編號，一小時可處理 100～200 頁的文件。翻拍後的檔案會自動上傳資料庫，並且透過程式辨識圖片中的文字，數位化成為可搜尋的資料，現在還能將英文自動翻譯成中文，更方便台灣民眾查閱。",
    "impact": "這是一個極具野心的計畫，他們不只想挖美國國家檔案局的檔案，期望同樣的鄉民精神與科技工具可以讓世界各地的台灣人都可以自己挖寶。畢竟大英博物館、荷蘭東印度公司、俄國聖彼得堡、日本、澳洲等地都有大量關於台灣的文獻尚未被研究。目前團隊已在美國成立「臺灣國家寶藏基金會」，每月組織志工團到馬里蘭進行翻拍，累積超過 100,000 筆資料上網。"
  }
]

class Projects extends Component {
  componentDidMount() {

  }
  state = {
    open: false,
  };
 
  onOpenModal = (e) => {
    modalId = e.target.dataset.id;
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  modalContent = (i) => {
    if(projectListData[i]) {
      return (
        <div className="pv4">
          <div className="mt4 container mw9 w-85 center">
            <h3 className="ma0 fw5">{projectListData[i].name}</h3>
            <h5 className="mt2 o-70 fw4 mw6">{projectListData[i].description}</h5>
          </div>
          <img src={projectListData[i].image[0]}/>
          <div className="mt5 container mw9 w-85 center">
            <h4 className="ma0 fw4">觀察（insight）</h4>
            <p className="mv2 o-70 mw6 pb4">{projectListData[i].insight}</p>
            <img className="mb5-l mb4" src={projectListData[i].image[0]}/>
            <h4 className="ma0 fw4">作法（idea）</h4>
            <p className="mv2 o-70 mw6 pb4">{projectListData[i].idea}</p>
            <img className="mb5-l mb4" src={projectListData[i].image[0]}/>
            <h4 className="ma0 fw4">影響力（impact）</h4>
            <p className="mv2 o-70 mw6 pb4">{projectListData[i].impact}</p>
            <img src={projectListData[i].image[0]}/>
          </div>
        </div>
      );
    }
    else return false;
  }

  project = (i) => {
    var divStyle = {
      backgroundImage: 'url(' + projectListData[i].image[0] + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    return (
      <div className="fl project ma3 cp hideme-more hidediv" data-id={i} onClick={this.onOpenModal}>
        <div className="overflow-hidden center mt0 mb3 bg-white h5 relative br1 pn">
          <span className="bg-dark-black w-100 h-100 absolute showdiv showme-expand-y"></span>
          <figure className="project-img w-100 h-100 ma0" style={divStyle}></figure>
        </div>
        <div className="pt0 pl5 dash hideme hidediv pn">
          <h4 className="ma0 white fw4">{projectListData[i].name}</h4>
          <p className="white mt2 o-70">{projectListData[i].description}</p>
        </div>
      </div>
    )
  }
  
  render() { 
    let projectList = [];
    for(var i = 0; i < projectListData.length; i++) {
      projectList.push(this.project(i));
    }
    const { open } = this.state;
    return (
      <section className="fw-100 bg-dark pv6-l pv5"> 
        <div className="container mw9 w-85 center white">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">精選專案</h3>
            <h5 className="ma0 lh-copy tc mw7 center fw4 f4-ns f5 o-70 mb5-l mb4 hideme hidediv">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h5>
          <div className="cf flexbox center mw74">
            {projectList}
          </div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
          {this.modalContent(modalId)}
        </Modal>
      </section>
    )
  }
}

export default Projects;