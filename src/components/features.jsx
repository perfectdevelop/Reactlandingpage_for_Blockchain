import React, { Component } from "react";
import Carousel from 'react-simply-carousel';
import { useState } from 'react';
import Marquee from "react-fast-marquee";

import Homegif from '../assets/homegif.gif';
import Image1 from '../assets/Carousel/Carousel1.jpg';
import Image2 from '../assets/Carousel/Carousel2.jpg'
import Image3 from '../assets/Carousel/Carousel3.jpg'
import Image4 from '../assets/Carousel/Carousel4.jpg'
import Image5 from '../assets/Carousel/Carousel5.jpg'
import Image6 from '../assets/Carousel/Carousel6.jpg'
import FeaturesImage from '../assets/Carousel/Carousel3.jpg';


export class home extends Component {
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <div id="features">
        <p className="each-title features-title">FEATURES</p>
        <div className="features-container">
          <div className="features-left">
            <div className="features-content">
            <p className="">🍬 A gachapon machine to spend Tendies on fun NFT drops including collabs with other artists</p>
            <p className="">🔥 An incentivized burn mechanic to reduce Wagie supply</p>
            <p className=""> 🎮 A video game where you can wager Tendies on match outcomes</p>
            <p className="">🎃 In-game skins purchaseable with Tendies + limited time gachapon skin drops</p>
            <p className="">💸 Auctions for legendary 1/1 Wagies</p>
            <p className="">🗿 Custom, 3D modelled NFTs of your Wagie</p>
            <p className="">💞 Breeding/Customization mechanic</p>
            </div>
          </div>
          <div className="features-right">
            <img src={FeaturesImage} alt="" className="" />
          </div>
        </div>
      </div>
    );
  }
}

export default home;
