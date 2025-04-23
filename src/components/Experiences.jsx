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
                Graduate Research Assistant @ Smart City Laboratory, UIUC
              </div>
              <div className="job-date">July 2024 - Present</div>
              <div className="experience-content">
                <div className="experience-image-container">
                  <img src={img6} alt="Experience 1" className="experience-image" />
                </div>
                <div className="job-description">
                  <p>
                  I am pursuing my M.S. in Civil Engineering (Transportation) under Professor Alireza Talebpour in the 
                  Department of Civil & Environmental Engineering at UIUC. For my main research, I am analyzing various control spacing models 
                  such as constant spacing, constant time headway, traffic flow stability, constant safety factor, and intelligent driver model for 
                  Adaptive Cruise Control (ACC) vehicles. I am also exploring how to leverage multi-agent deep 
                  reinforcement learning for trajectory planning for efficient and safe car-following and lane-changing behaviors of 
                  self-driving vehicles. In addition to this, I am collaborating on a motion planning and control development for a 
                  self-driving vehicle project, which is currently being tested at the Illinois Center for Transportation in Rantoul, Illinois. 
                  To simulate and validate planning and control algorithms on the physical vehicle, I use the Robot Operating System (ROS) to 
                  assess vehicle dynamics. I also collaborate on a project that leverages the Waymo Open Dataset to study vehicle 
                  motion behaviors, such as lane-changing patterns, to enhance our understanding of autonomous driving dynamics.
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
                  field of transportation engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
  





        <div className="experience-box"> 
          <div className="experience">
            <div className="job-title">
              Undergraduate Research Assistant @ Smart City Laboratory, UIUC
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

        {/* <div className="experience-box">
          <div className="experience">
            <div className="job-title">
              President @ Institute of Transportation Engineers (ITE) UIUC Chapter
            </div>
            <div className="job-date">August 2022 - May 2024</div>
            <div className="experience-content">
              <div className="experience-image-container">
                <img src={img3} alt="Experience 4" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                  As the President of the Institute of Transportation Engineers UIUC Chapter (ITE@UIUC), I was mainly in charge of organizing and 
                  hosting transportation conferences, seminars, networking panels and social events to connect prospective students with  
                  professionals in the transportation industry and academia. I helped ITE@UIUC host a major Transportation Student-Professional 
                  Networking Panel every fall semester. Guest speakers from the Illinois Traffic Engineering Safety Conference (TES) would 
                  join the panel to discuss the modern advances Intelligent Transportation Systems for Smart Mobility. Additionally, I lead the 
                  Transportation Data Science Team of 6 students to analyze and forecast public transit data using Machine Learning algorithms.
                  For all the ITE@UIUC transportation projects, I took a crucial role at the UIUC Engineering Open House (EOH) to proudly 
                  present them. In the academic side of ITE@UIUC, I also mentored passionate Civil Engineering (Transportation) majors, and Computer Science 
                  majors and minors by offering comprehensive curriculum planning guidance and coursework selection. I am also a proud member representing 
                  ITE@UIUC in the UIUC Engineering Council Organization to not only emphasize diversity in transportation, but also get involved with 
                  various volunteering activities for the university community.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="experience-box">
          <div className="experience">
            <div className="job-title">
              Undergraduate Researcher @ Human-Centered Autonomy Laboratory, UIUC
            </div>
            <div className="job-date">January 2023 - May 2023</div>
            <div className="experience-content">
              <div className="experience-image-container">
                <img src={img2} alt="Experience 5" className="experience-image" />
              </div>
              <div className="job-description">
                <p>
                I assisted Professor Katherine Driggs-Campbell in the Electrical & Computer Engineering Department at UIUC in a collaborative 
                project primarily revolved around optimizing the TransFuser networks in the CARLA Self-driving Car Simulator. I was mainly in 
                charge of designing a motion-planning algorithm by leveraging various Deep Reinforcement Learning and Computer Vision methods for 
                traffic simulation. The primary goal was to optimize the trajectory planning of self-driving cars by assessing the effectiveness 
                of the TransFuser networks.
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
      </div>
    );
  }
}

export default Experiences;
