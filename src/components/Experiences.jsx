import React from 'react';
import './css/Experiences.css';
import img1 from '../images/GPT.png';
import img2 from '../images/ite_uiuc.png';
import img3 from '../images/hca.png';
import img4 from '../images/opendrive.png';

class Experiences extends React.Component {
  render() {
    return (
      <div id="experiences" name="experiences" className="experiences">
        <div className="experiences-title">EXPERIENCES</div>

        <div className="experience-box">
          <div className="experience">
            <div className="job-title">
              Undergraduate Researcher @ Smart City Laboratory, UIUC
            </div>
            <div className="job-date">May 2023 - Present</div>
            <div className="experience-content">
              <div className="image-container">
                <img src={img1} alt="Experience 1" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                I am currently providing support to Professor Alireza Talebpour in the Civil & Environmental Engineering (Transportation) Department at UIUC. 
                My primary focus is on developing a framework for Traffic Space Shaping that utilizes GPT and Deep Reinforcement Learning techniques. 
                Specifically, my responsibilities include designing and implementing an algorithm for finite state-to-state transitions using GPT and 
                Markov Decision Process (MDP) methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-box">
          <div className="experience">
            <div className="job-title">
              President @ Institute of Transportation Engineers (ITE) UIUC Chapter
            </div>
            <div className="job-date">August 2022 - Present</div>
            <div className="experience-content">
              <div className="image-container">
                <img src={img2} alt="Experience 2" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                  As the President of the ITE@UIUC Chapter, my responsibilities include organizing and hosting transportation
                  conferences and seminars, as well as fostering connections between prospective students and professionals
                  in the transportation industry and academia. Additionally, I have developed the official website for ITE@UIUC,
                  and I provide mentorship to undergraduate students majoring in Civil and Environmental Engineering (Transportation),
                  Computer Science, and related fields. I also lead the ITE@UIUC exhibitions at the UIUC Engineering Open House (EOH).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-box">
          <div className="experience">
            <div className="job-title">
              Undergraduate Researcher @ Human-Centered Autonomy Laboratory, UIUC
            </div>
            <div className="job-date">January 2023 - May 2023</div>
            <div className="experience-content">
              <div className="image-container">
                <img src={img3} alt="Experience 3" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                I provided assistance to Professor Katherine Driggs-Campbell in the Electrical & Computer Engineering Department at UIUC. 
                My research team primarily revolved around optimizing the TransFuser in CARLA Simulator through the utilization of Reinforcement Learning 
                and Computer Vision techniques. I played a significant role in the development of an End-to-End Autonomous Driving Model that leveraged 
                Neural Networks as its foundation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-box">
          <div className="experience">
            <div className="job-title">Research Assistant @ Reliable Autonomy Group, UIUC</div>
            <div className="job-date">May 2022 - August 2022</div>
            <div className="experience-content">
              <div className="image-container">
                <img src={img4} alt="Experience 4" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                I collaborated with Professor Sayan Mitra in the Electrical & Computer Engineering Department at UIUC 
                on the Verse Lane Map Generator for Control Verification Research. My primary tasks involved extracting 
                road attributes from ASAM OpenDRIVE files and converting them into Python files. 
                Additionally, I developed a data visualization function to illustrate the road attributes from the ASAM OpenDRIVE file. 
                These lane representations were utilized in control verification simulators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
