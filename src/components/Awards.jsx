import React from 'react';
import './css/Awards.css';
import img1 from '../images/grant.png';
import img2 from '../images/uiuc.png';
import img3 from '../images/FOB.png';
import img4 from '../images/newmark.png'

class Awards extends React.Component {
  render() {
    return (
      <div id="awards" name="awards" className="awards">
        <div className="awards-title">AWARDS</div>
        <div className="awards-box">
          <div className="awards">
        
          <div className="awards-content">
              <div className="aimage-container">
                <img src={img4} alt="Awards 3" className="awards-image" />
              </div>
              <div className="awards-description">
                <ul>
                  <li className="awards-subtitle">Charles E. DeLeuw Scholarship</li>
                  <li>March 2025</li>
                  <li>The Charles E. Deleuw Scholarship was endowed in 1970 by Mr. DeLeuw, founder of DeLeuw, Cather and Company, to enable 
                    an outstanding civil engineering student to inspect urban public transportation systems in foreign countries. The inspection trip 
                    was intended by Mr. DeLeuw to focus on urban and suburban rapid transit systems, a field to which he made many contributions.  </li>
                </ul>
              </div>
            </div>
            
        
          <div className="awards-content">
              <div className="aimage-container">
                <img src={img3} alt="Awards 3" className="awards-image" />
              </div>
              <div className="awards-description">
                <ul>
                  <li className="awards-subtitle">UIUC EOH 2024 Outstanding Exhibit Award 3rd Place</li>
                  <li>April 2024</li>
                  <li>ITE@UIUC was awarded the “Outstanding Exhibit Award” in 3rd place for demonstrating what “Mobility for Our Future” 
                    will look like during the UIUC Engineering Open House 2024. CAD design of new High-speed Rail, Maglev, eVTOL, 
                    Unmanned Aerial Vehicles (UAV), Bus Rapid Transit (BRT) system and data visualization using AI for time-series 
                    forecasting for public transit planning were shown. </li>
                </ul>
              </div>
            </div>
            
            
            <div className="awards-content">
              <div className="aimage-container">
                <img src={img1} alt="Awards 2" className="awards-image" />
              </div>
              <div className="awards-description">
                <ul>
                  <li className="awards-subtitle">Grant W. Shaw Memorial Scholarship</li>
                  <li>March 2023</li>
                  <li>Scholarship award for students demonstrating the best leadership in traffic engineering awarded by faculty members in the
                    transportation area of the civil engineering department at the University of Illinois at Urbana-Champaign, and the Schaumburg Chapter
                    of the Illinois Association of Highway Engineers.</li>
                </ul>
              </div>
            </div>



            <div className="awards-content">
              <div className="aimage-container">
                <img src={img2} alt="Awards 2" className="awards-image" />
              </div>
              <div className="awards-description">
                <ul>
                  <li className="awards-subtitle">Dean's List</li>
                  <li>May 2022</li>
                  <li>The Dean’s List is given to honor full-time students whose grade-point average (GPA) for that semester ranks in the upper 20
                    percent of their college every semester  at the University of Illinois at Urbana-Champaign.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Awards;
