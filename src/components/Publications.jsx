import React from 'react';
import './css/Publications.css';
import img1 from '../images/LSTM_NN.png';


class Publications extends React.Component {
  render() {
    return (
      <div id="publications" name="publications" className="publications">
        <div className="publications-title">PUBLICATIONS</div>
          <div className="publications-box">
            <div className="publications">
              <div className="publications-content"> 
                {/* <div className="image-container">
                  <img src={img1} alt="Publication 1" className="publications-image" />
                </div> */}
                 <div className="publications-description">
                   <ul>  
                    <a href="">
                        <li className="place-title"> Coming Soon! Stay Tuned! </li> 
                    </a>
                    {/* <li>Louis Sungwoo Cho, Department of Civil and Environmental Engineering (Transportation) at UIUC</li>
                    <li>Alireza Talebpour, Department of Civil and Environmental Engineering (Transportation) at UIUC</li>
                    <li>Transportation Research Part C: Emerging Technologies (2024) (Expected)</li>   */}
                  </ul>
                </div> 
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Publications;
