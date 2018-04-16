import React, { Component } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';

class Cover extends Component {
    render() {
      return ( 
        <ParallaxBanner
          className="fw-100 cover-bg init"
          layers={[
              {
                  image: 'images/cover-bg.png',
                  amount: .1,
                  slowerScrollRate: false,
              },
              {
                  image: 'images/cover/lines.png',
                  amount: .2,
                  slowerScrollRate: true,
              },
              {
                  image: 'images/cover/lines.png',
                  amount: .2,
                  slowerScrollRate: true,
              }
          ]}
          style={{
              height: 'auto'
          }}
      >
         <section id="cover" className='fw-100 vh-100 mh-640 bg-dark'>
          <div className="container mw9 w-85 center pv4 relative z1">
            <div className="pv6-ns pb6">
              <img src="images/butterfly-logo.svg" width="80" height="80" alt="butterfly-logo"/>
              <h1 className="f1-ns f2 white fw3 mt2 mb0">Civic Tech <br/> Prototype Grant <br/></h1>
              <h2 className="f2-ns f3 near-white mt2 mb3 fw5 tracked">公民科技創新獎助金</h2>
              <img src="images/g0v-logo.svg" width="199" height="32" alt="g0v-logo"/>
            </div>
          </div>
          <img id="small-butterfly" src="images/cover/big-butterfly.png" alt="butterfly"/>
          <img id="medium-butterfly" src="images/cover/big-butterfly.png" alt="butterfly"/>
          <img id="big-butterfly" src="images/cover/big-butterfly.png" alt="butterfly"/>
          <img id="cover-people" src="images/cover/people.png" alt="people" />
        </section>
        </ParallaxBanner>
        )
    }
  }
export default Cover
