import React from 'react';
import './css/Publications.css';
import img1 from '../images/LSTM_NN.png';


class Publications extends React.Component {
  render() {
    return (
      <div id="publications" name="publications" className="publications">
        <div className="publications-title">PUBLICATIONS & MANUSCRIPTS</div>
          <div className="publications-box">
            <div className="publications"> 
                <ul>  
                <a href="">
                    <li className="place-title"> 
                      Cho, L. S., & Talebpour, A. (2025). Evaluating Control Spacing Strategies for Autonomous Vehicles.<br/>Under review in the ASCE Journal of Transportation Engineering, Part A: Systems. </li> 
                    
                </a> 
              </ul>
             
            </div>
        </div>
      </div>
    );
  }
}

export default Publications;
