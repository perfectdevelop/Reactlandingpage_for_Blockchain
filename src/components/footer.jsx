import React, { Component } from 'react'
import FooterImage from '../assets/Website/footer.png';

export class footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footer">
          <img src={FooterImage} alt="" className="footer-image" />
        </div>
        <div className="footer-footer">
          <div className="footer-right">
            <p className="terms">Terms</p>
          </div>
          <p className="copyright">Ⓒ 2021 Wagies</p>
        </div>
      </div>
    )
  }
}

export default footer
