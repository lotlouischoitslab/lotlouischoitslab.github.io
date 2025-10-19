import React from 'react'
import LOT_STEM from '../assets/stem.png'
import travel_report from '../assets/Louis_Charles_Travel_Report.pdf'
import charles from '../assets/charles.jpg'
import graic from '../assets/graic.png' 
import chic_st_louis from '../assets/chic_st_louis.png'
import ktx_cheong from '../assets/ktx_cheongryong.png'
import mof from '../assets/mof.png'
import av_sim from '../assets/av_sim.png'
import seoul_subway from '../assets/seoul_sub1.png'
import cav_road from '../assets/cav_road.jpg'
import spaceship from '../assets/spaceship.png'
import transpo from '../assets/transportation.png'
import cumtd from '../assets/cumtd.jpg'
import ohare from '../assets/ohare.png'
import ktx from '../assets/ktx.png' 
import airline from '../assets/a350.png'
import amtrak from '../assets/amtrak.jpg'
import web from '../assets/web.png'
import urban from '../assets/urban.png'
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
            style={{ backgroundImage: `url(${LOT_STEM})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://lotlouischoitslab.github.io/lotlouischo_stem_club.github.io/">
                    <button className='small-button'>LOTLOUISCHO STEM CLUB</button>
                  </a>
                </div>
              </div>
            </div>



          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${charles})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href={travel_report}>
                    <button className='small-button'>Charles De Leuw Travel Report</button>
                  </a>
                </div>
              </div>
            </div>


          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${graic})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://youtu.be/PtBUiRwEzz0">
                    <button className='small-button'>GRAIC Autonomous Driving Race Competition</button>
                  </a>
                </div>
              </div>
            </div>



          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${chic_st_louis})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://docs.google.com/presentation/d/1pj6C-knIghAueX_ljLOivago2Qncm7ppOQWKqFb2tOw/edit?usp=sharing">
                    <button className='small-button'>Chicago to St. Louis High-speed Rail Proposal</button>
                  </a>
                </div>
              </div>
            </div>




          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${ktx_cheong})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://github.com/lotlouischoitslab/South_Korea_High-speed_Rail_Planning">
                    <button className='small-button'>South Korea High-speed Rail Planning</button>
                  </a>
                </div>
              </div>
            </div>


          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${mof})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://github.com/lotlouischoitslab/ITE_UIUC_EOH_2024_Mobility_for_Our_Future">
                    <button className='small-button'>Mobility for Our Future</button>
                  </a>
                </div>
              </div>
            </div>


          {/*Grid Item */}
          <div 
            style={{ backgroundImage: `url(${av_sim})`,backgroundSize: '110%', height: '80%'}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='hover-effect'>
                <div className='centered-content'>
                  <a href="https://github.com/lotlouischoitslab/Autonomous_Vehicles_Simulator">
                    <button className='small-button'>Autonomous Vehicles Simulator</button>
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

        {/*Grid Item */}
        <div 
          style={{ backgroundImage: `url(${cumtd})`,backgroundSize: '110%', height: '80%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/CUMTD_Bus_Analysis_Classification">
                  <button className='small-button'>CUMTD Bus Ridership Analysis & Classification</button>
                </a>
                

              </div>
            </div>
          </div>

        {/*Grid Item */}
        <div 
          style={{ backgroundImage: `url(${ohare})`,backgroundSize: '110%', height: '80%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://github.com/lotlouischoitslab/Direct-Flight-Airport-Connections">
                  <button className='small-button'>Direct Airport Connections Database</button>
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
          style={{ backgroundImage: `url(${web})`,backgroundSize: '100%', height: '90%'}}
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
 
 

        {/*Grid Item */}
        <div 
          style={{ backgroundImage: `url(${urban})`,backgroundSize: '110%', height: '90%'}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
            {/*Hover*/}
            <div className='hover-effect'>
              <div className='centered-content'>
                <a href="https://illinois.digication.com/abc-louis-sungwoo-cho/home-1">
                  <button className='small-button'>Urban Neighborhood Planning & CAD Design</button>
                </a>
                

              </div>
            </div>
          </div>



        </div>
      </div>
      </div>
  )
 }
}
export default Projects;
