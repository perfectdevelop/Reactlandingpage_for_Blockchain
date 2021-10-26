import React, { Component } from "react";
import Mainlogo from '../assets/logo/logo.png'

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img src={Mainlogo} alt="logo" className="logo" />
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" className="page-scroll">
                  MINT
                </a>
              </li>
              <li>
                <a href="#roadmap-title" className="page-scroll">
                  ROAD MAP
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                  <button className="connect-button">CONNECT</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
