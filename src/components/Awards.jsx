import React from 'react';
import './css/Awards.css';
import img1 from '../images/grant.png';
import img2 from '../images/uiuc.png';

class Awards extends React.Component {
  render() {
    return (
      <div id="awards" name="awards" className="awards">
        <div className="awards-title">AWARDS</div>
        <div className="awards-box">
          <div className="awards">
            <div className="awards-content">
              <div className="aimage-container">
                <img src={img1} alt="Awards 1" className="awards-image" />
              </div>
              <div className="awards-description">
                <ul>
                  <li className="awards-subtitle">Grant W. Shaw Memorial Scholarship</li>
                  <li>May 2023</li>
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
                    percent of their college every semester.</li>
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
