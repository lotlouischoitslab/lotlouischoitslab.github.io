import React from 'react';
import './css/Publications.css'; 
import louis_cee497 from '../assets/Louis_CEE497_Thesis.pdf'


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
                      Cho, L. S, Talebpour. A. (2025) Evaluating Longitudinal Control Strategies for Autonomous Vehicles.<br/>Under review in the ASCE Journal of Transportation Engineering, Part A: Systems. </li> 
                    
                </a> 
              </ul>
        
              <ul>
                <a href="https://www.ideals.illinois.edu/items/136229">
                    <li className="place-title"> 
                    Cho, L. S. (2025) Evaluating and Comparing Longitudinal Control Strategies for Autonomous Vehicles. 
                    <br/>Master’s Thesis, University of Illinois Urbana-Champaign advised by Prof. Alireza Talebpour.  </li> 
                    
                </a> 
 
              
              </ul>


              <ul>
                <a href={louis_cee497}>
                    <li className="place-title"> 
                      Cho, L. S. (2024). Trajectory Reconstruction Based on Probabilistic Time-Space Diagram. 
                      <br/>CEE 497 Senior Independent Study Thesis advised by Prof. Alireza Talebpour. </li> 
                    
                </a> 
 
              
              </ul>

             
            </div>
        </div>
      </div>
    );
  }
}

export default Publications;
