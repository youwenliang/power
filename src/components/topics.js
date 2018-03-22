import React, { Component } from 'react'
import Swiper from 'swiper';

class Topics extends Component {
  componentDidMount() {
    /* Init Swiper */
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 1,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 32,
    });
  }
  render() { 
    return (
      <section className="fw-100 bg-white pv6-l pv5"> 
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw2 hideme hidediv">五大主題</h3>
          <h5 className="ma0 lh-copy tc mw7 center fw4 mb5 hideme hidediv">g0v相信，好的創意與設計，若能投入持續開發、長期營運維護的人力與心力，就能引發蝴蝶效應，真正成為足以產生改變的成果！</h5>
          <div className="swiper-container center relative">
            <div className="swiper-wrapper">
              <div className="swiper-slide ph5">
                <div className="b--light-gray ba mh-600 pa4">a</div>
              </div>
              <div className="swiper-slide ph5">
                <div className="b--light-gray ba mh-600 pa4">a</div>
              </div>
              <div className="swiper-slide ph5">
                <div className="b--light-gray ba mh-600 pa4">a</div>
              </div>
              <div className="swiper-slide ph5">
                <div className="b--light-gray ba mh-600 pa4">a</div>
              </div>
              <div className="swiper-slide ph5">
                <div className="b--light-gray ba mh-600 pa4">a</div>
              </div>
              <div className="swiper-slide ph5">
                <div className="b--light-gray ba mh-600 pa4">a</div>
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <div className="swiper-pagination mt3"></div>
        </div>
      </section>
    )
  }
}

export default Topics;