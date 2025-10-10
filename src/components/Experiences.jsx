import React from 'react';
import './css/Experiences.css';
import img6 from '../images/autonomy_transportation.png'
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
                Graduate Research Assistant | CEE@UIUC
              </div>
              <div className="job-date">July 2024 - May 2025</div>
              <div className="experience-content">
                <div className="experience-image-container">
                  <img src={img6} alt="Experience 1" className="experience-image" />
                </div>
                <div className="job-description">
                  <p>
                  I completed my M.S. in Civil Engineering (Transportation) under Professor Alireza Talebpour in the 
                  Department of Civil & Environmental Engineering at UIUC. For my thesis, I analyzed various control spacing models 
                  such as Constant Spacing; Constant Time Headway; Traffic Flow Stability; Constant Safety Factor; and Intelligent Driver Model for 
                  autonomous vehicles. In addition to my thesis research, I also contributed to analyzing and simulating traffic flow and controls for mixed 
                  autonomy environment. In addition to this, I contributed 
                  to a motion planning and control development for a self-driving vehicle project, which is currently being tested at the Illinois Center 
                  for Transportation in Rantoul, Illinois using Robot Operating System (ROS). I collaborated on a project using Waymo Open Dataset to 
                  vehicle analyze motion behaviors, such as lane-changing patterns, to enhance our understanding of autonomous driving dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>








        <div className="experience-box"> 
          <div className="experience">
            <div className="job-title">
              Undergraduate Research Assistant | CEE@UIUC
            </div>

            <div className="job-date">May 2023 - May 2024</div>
              <div className="experience-content">
                <div className="experience-image-container">
                  <img src={img5} alt="Experience 2" className="experience-image" />
                </div>
                <div className="job-description">
                  <p>
                  I collaborated with Professor Alireza Talebpour in the Department of Civil & Environmental Engineering (Transportation) 
                  at UIUC on a research to develop a Trajectory Re-identification Prediction Algorithm using Probabilistic Time-space Diagrams by 
                  integrating Artificial Intelligence into fundamental macroscopic concepts in Traffic Flow Theory. The main objective was to 
                  integrate Convolutional Social Pooling model which predicts vehicular trajectories to safely re-identify missing trajectory data 
                  for each vehicles due to complex traffic environment dynamics, especially when passing underneath overpasses.  
                  </p>
                </div>
              </div>
  
              <div className="experience-content">
                <div className="experience-image-container">
                  <img src={img4} alt="Experience 3" className="experience-image" />
                </div>
                <div className="job-description">
                  <p>
                  I worked with Professor Alireza Talebpour in the Department of Civil & Environmental Engineering (Transportation) 
                  at UIUC. The objective of this project was to leverage GPT and Deep Reinforcement Learning for Traffic State Spacing. My 
                  primary task was to create a sequence-based simulation using LSTM neural networks enabling the agent to learn the state 
                  patterns. After the agent learns the state-action-state patterns by simulating the Markov Decision Process, the aim was to 
                  enable the agent to select the most optimal action for the next feasible state the vehicle can move to.  
                  </p>
                </div>
            </div>
          </div>
        </div>




   
 

        <div className="experience-box">
          <div className="experience">
            <div className="job-title">Undergraduate Researcher | ECE@UIUC</div>
            <div className="job-date">May 2022 - August 2022</div>
            <div className="experience-content">
              <div className="experience-image-container">
                <img src={img1} alt="Experience 6" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                I collaborated with Professor Sayan Mitra in the Electrical & Computer Engineering Department at UIUC 
                on the Verse Lane Map Generator for Control Verification Research. My primary tasks were extracting 
                road attributes from ASAM OpenDRIVE files and converting them into Python files. I developed a data visualization 
                function to illustrate the road attributes from the ASAM OpenDRIVE file. Once the road geometry components were converted and
                visualized, they were deployed on the traffic simulator for control verification of the autonomous agents. 
                <a href="https://autoverse-ai.github.io/Verse-library/"> [Code Link]</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-box">
          <div className="experience">

          <div className="job-title">
              Graduate Representative | President @ Institute of Transportation Engineers (ITE) UIUC Chapter
            </div>
            <div className="job-date">May 2024 - May 2025 | August 2022 - May 2024 </div>
  
            <div className="experience-content">
              <div className="experience-image-container">
                <img src={img3} alt="Experience 4" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                  I am the Graduate Representative for the Institute of Transportation Engineers (ITE) 
                  at the UIUC Chapter. In this role, my primary responsibility is to cultivate and strengthen connections between undergraduate 
                  and graduate students within the field of transportation engineering. This involves organizing events, workshops, and informal
                  gatherings that provide both networking opportunities and a platform for knowledge exchange. Additionally, I serve as a 
                  mentor to prospective undergraduate students who express a strong interest in advancing to graduate studies. 
                  I offer insights into the academic and professional areas of transportation engineering, assist mentees in navigating the 
                  application process, and provide personalized advice on how to succeed in graduate school. 
                </p>
                <p>
                  As President of the Institute of Transportation Engineers UIUC Chapter (ITE@UIUC), I was responsible for organizing 
                  and hosting transportation conferences, seminars, networking panels, and social events aimed at connecting prospective 
                  students with professionals from both the transportation industry and academia. I spearheaded the annual 
                  Transportation Student-Professional Networking Panel every fall, featuring guest speakers from the Illinois Traffic 
                  Engineering Safety Conference (TES) who discussed the latest developments in Intelligent Transportation Systems for 
                  Smart Mobility. Additionally, I led the Transportation Data Science Team, a group of six students who utilized 
                  machine learning algorithms to analyze and forecast public transit data. My role also extended to the UIUC 
                  Engineering Open House (EOH), where I proudly showcased our team’s projects. I provided mentoring to 
                  Civil Engineering (Transportation) majors and Computer Science majors and minors, offering guidance on curriculum 
                  planning and coursework selection. Moreover, I actively represented ITE@UIUC within the UIUC Engineering Council 
                  Organization, participating in various volunteering activities that benefited both the university community and the 
                  transportation engineering enthusiasts.
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
