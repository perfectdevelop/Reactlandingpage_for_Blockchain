import React, { Component } from 'react'
import AboutImage from '../assets/wagies/2.png';
import background from '../assets/Website/heartbackground.png';

export class about extends Component {
  render() {
    return (
      <div id="about" style={{ 
        backgroundImage: `url(${background})` }}>
        <p className="each-title">ABOUT US</p>
        <div className="about-container">
          <div className="about-left">
            <img src={AboutImage} alt="" />
          </div>
          <div className="about-right">
            <p className="about-content">
              Wagies is and avatar project that is built around our value-less utility token(Tandies)
            </p>
            <p>To Reward Members for Holding Wagies, we are building a gaming and a gachapon ecosystem around this token.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default about
