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
                  I am actively collaborating with Professor Alireza Talebpour in the Department of Civil & Environmental Engineering (Transportation) 
                  at UIUC. My role is to develop an efficient trajectory prediction algorithm for Autonomous Vehicles by integrating AI into Traffic Flow Theory.
                  Currently, I am exploring various LSTM and RNN techniques to predict trajectories for self-driving agents. 
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
                  at UIUC. The project was to use GPT and Deep Reinforcement Learning for Traffic State Spacing. My primary task was to create a 
                  sequence-based simulation using LSTM neural networks enabling the agent to learn the state patterns optimizing the action selection process. 
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
                  conferences, seminars, networking panels as well as fostering connections between prospective students and professionals
                  in the transportation industry and academia. ITE@UIUC hosts two major Transportation Student-Professional Networking Panels throughout the school year.
                  Every Fall, guest speakers from the Illinois Traffic Engineering Safety Conference (TES) would join our panel to discuss the modern advances in Smart Mobility.
                  Every Spring, guest speakers from the Illinois Transportation and Highway Engineering Conference (T.H.E) would join our panel to discuss about roads and highways.
                  Additionally, I lead the Transportation Data Science Team of 10 students to analyze transit data using various Machine Learning algorithms and Deep Learning techniques 
                  for classification tasks. For all the ITE@UIUC projects, I take a crucial role at the UIUC Engineering Open House (EOH) to proudly present all of them. Not only this, but I also 
                  mentor passionate Civil Engineering (Transportation) majors, and Computer Science majors and minors.
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
                I assisted Professor Katherine Driggs-Campbell in the Electrical & Computer Engineering Department at UIUC in a project
                primarily revolved around optimizing the TransFuser networks in the CARLA Self-driving Car Simulator. My main part was to 
                explore how Deep Reinforcement Learning and Computer Vision techniques could potentially optimize the motion planning process. 
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
