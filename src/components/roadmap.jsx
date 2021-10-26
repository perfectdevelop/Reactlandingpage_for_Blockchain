import React, { Component } from "react";
import background from '../assets/Website/heartbackground.png';

export class Gallery extends Component {
  render() {
    return (
      <div id="roadmap" className="text-center" style={{ 
        backgroundImage: `url(${background})` }}>
        <p className="each-title roadmap-title" id="roadmap-title">Roadmap</p>
        <div className="roadmap-container">
          <div className="roadmap">
            <p className="roadmap-content-title">25% SOLD</p>
            <p className="roadmap-content">The figure Factory opens. Custom 3D modelied NFTs of your Wagie can be purchased for Tendies.</p>
          </div>
          <div className="roadmap">
            <p className="roadmap-content-title">52% SOLD</p>
            <p className="roadmap-content">Gachapon machine comes online. Spend Tendies on fun NFTs drops + collabs from other artists.</p>
          </div>
          <div className="roadmap">
            <p className="roadmap-content-title">80% SOLD</p>
            <p className="roadmap-content">Breeding/Customization mechanic begins development...</p>
          </div>
          <div className="roadmap">
            <p className="roadmap-content-title">100% SOLD</p>
            <p className="roadmap-content">A video game where you can wager Tendies on match outcomes.</p>
            <p className="roadmap-content">Tendies can be redeemed for in-game skins</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
