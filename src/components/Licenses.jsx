import React from 'react';
import './css/Licenses.css';
import img1 from '../images/ncees.png';


class Licenses extends React.Component {
  render() {
    return (
      <div id="licenses" name="licenses" className="licenses">
        <div className="licenses-title">LICENSES & CERTIFICATIONS</div>
          <div className="licenses-box">
            <div className="licenses">
              <div className="licenses-content">
                <div className="licenses-image-container">
                  <img src={img1} alt="licenses 1" className="licenses-image" />
                </div>
                <div className="licenses-description">
                  <ul>
                    <li className="place-title">Engineer in Training (E.I.T), Civil Engineering </li>
                    <li>October 2025 </li>
                    <li>Issued by National Council of Examiners for Engineering and Surveying (NCEES)</li>
                    
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Licenses;
