import React from 'react';
import './css/Experiences.css';
import img5 from '../images/av_trajectory.png';
import img4 from '../images/GPT.png';
import img3 from '../images/ite_uiuc.png';
import img2 from '../images/hca.png';
import img1 from '../images/opendrive.png';

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

            <div className="job-date">August 2023 - Present</div>
              <div className="experience-content">
                <div className="image-container">
                  <img src={img5} alt="Experience 1" className="experience-image" />
                </div>
                <div className="job-description">
                  <p>
                  I am actively collaborating with Professor Alireza Talebpour in the Civil & Environmental Engineering (Transportation) 
                  Department at UIUC. My core responsibility is the development of trajectory prediction algorithms for Autonomous Vehicles, 
                  with a particular emphasis on integrating AI into Traffic Flow Theory.
                  </p>
                </div>
              </div>

            <div className="job-date">May 2023 - August 2023</div>
              <div className="experience-content">
                <div className="image-container">
                  <img src={img4} alt="Experience 1" className="experience-image" />
                </div>
                <div className="job-description">
                  <p>
                  I worked closely with Professor Alireza Talebpour in the Department of Civil & Environmental Engineering (Transportation) 
                  at UIUC. My primary task was to devise a framework for Traffic Space Shaping using GPT and Deep Reinforcement Learning 
                  methodologies. As a part of this, I designed and executed sequence-based Deep Reinforcement Learning algorithms, and introduced an 
                  LSTM-based neural network. This enabled the agent to learn the state sequence patterns and subsequently choose the most optimal action.
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
                <img src={img3} alt="Experience 2" className="experience-image" />
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
                <img src={img2} alt="Experience 3" className="experience-image" />
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
                <img src={img1} alt="Experience 4" className="experience-image" />
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
