import React from 'react'
import seoul_subway from '../assets/seoul_sub1.png'
import cav_road from '../assets/cav_road.jpg'
import spaceship from '../assets/spaceship.png'
import transpo from '../assets/transportation.png'
import cumtd from '../assets/cumtd.jpg'
import ktx from '../assets/ktx.png'
import asam from '../assets/opendrive.png'
import airline from '../assets/a350.png'
import amtrak from '../assets/amtrak.jpg'
import web from '../assets/web.png'
import './css/Projects.css'

class Projects extends React.Component {
  render () {
  return (
    <div id='projectsid' name='projects' className='projects'>
      <div className='projects-title'>
        PROJECTS
      </div>
      <div className='projects-description'>
        Check out my projects!
      </div>
      <div className='my-projects'>
        <div className='projects-container'>

          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${seoul_subway})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://github.com/lotlouischoitslab/Seoul_Subway_Network">
                    <button className='small-button'>Seoul Subway Network</button>
                  </a>
                </div>
              </div>
            </div>

          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${cav_road})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://github.com/lotlouischoitslab/CAV_Traffic_Simulation_ChatGPT">
                    <button className='small-button'>Connected & Automated Vehicles Simulator using ChatGPT</button>
                  </a>
                </div>
              </div>
            </div>

          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${spaceship})`,backgroundSize: '130%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://github.com/lotlouischoitslab/Spaceship_Titanic">
                    <button className='small-button'>Spaceship Titanic Kaggle Challenge</button>
                  </a>
                  
                </div>
              </div>
            </div>

          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${transpo})`,backgroundSize: '130%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://github.com/lotlouischoitslab/Transportation_Engineering">
                    <button className='small-button'>Computational Transportation Science (CTS) Open Source</button>
                  </a>
                  

                </div>
              </div>
            </div>


        <div 
          style={{ backgroundImage: `url(${cumtd})`,backgroundSize: '110%', height: '80%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/ITE_UIUC_Engineering_Open_House_2023">
                  <button className='small-button'>ITE@UIUC EOH 2023 CUMTD Bus Ridership Analysis and Classification</button>
                </a>
                

              </div>
            </div>
          </div>

          

          {/*Grid Item*/}
          <div 
          style={{ backgroundImage: `url(${ktx})`,backgroundSize: '115%', height: '90%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/KTX_Ridership_Analysis">
                  <button className='small-button'>KTX Image Classification </button>
                </a>
              </div>
            </div>
          </div>
          
          {/*Grid Item*/}
          <div 
          style={{ backgroundImage: `url(${asam})`,backgroundSize: '110%', height: '90%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/Verse-library">
                  <button className='small-button'>Verse Library for Autonomous Driving Control Verification</button>
                </a>
              </div>
            </div>
          </div>


          {/*Grid Item*/}
          <div style={{ backgroundImage: `url(${airline})`,backgroundSize: '100%', height: '90%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'
          >            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/Airline_Satisfaction">
                  <button className='small-button'>Airline Satisfaction Analysis</button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item */}


          <div 
          style={{ backgroundImage: `url(${amtrak})`,backgroundSize: '100%', height: '90%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/Amtrak-Scheduling-Helper">
                  <button className='small-button'>Amtrak Scheduling</button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
          style={{ backgroundImage: `url(${web})`,backgroundSize: '120%', height: '90%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/lotlouischoportfolio">
                  <button className='small-button'>Portfolio Website</button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item*/}



        </div>
      </div>
      </div>
  )
 }
}
export default Projects;

