import React, { Component } from "react";
import Teamleft from '../assets/Website/Mot.jpg';
import Teamright from '../assets/Website/MSILucifer.jpg';
import background from '../assets/Website/heartbackground.png';

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center" style={{ 
        backgroundImage: `url(${background})` }}>
        <p className="each-title">TEAM</p>
        <div className="team-container">
          <div className="team-left">
            <img src={Teamleft} alt="" className="team-left-image" />
          </div>
          <div className="team-right">
            <img src={Teamright} alt="" className="team-left-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
