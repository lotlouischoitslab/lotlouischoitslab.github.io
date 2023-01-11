import React from 'react'

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
        Check out some of my recent projects for my work! 
        To view more projects that I have done, feel free to 
        checkout my GitHub Repository by clicking on the GitHub icon.
      </div>
      <div className='my-projects'>

      

      {/*Grid Item */}
        <div className='projects-container'>
          <div 
            style={{ backgroundImage: `url(${transpo})`}}
            className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
              {/*Hover*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://github.com/lotlouischoitslab/Transportation_Engineering">
                    <button className='text-center rounded-lg px-4 py-3 m-5 bg-white text-gray-700 font-bold text-lg'>Computational Transportation Science (CTS) Open Source</button>
                  </a>
                  

                </div>
              </div>
            </div>


        <div 
          style={{ backgroundImage: `url(${cumtd})`}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>            
            {/*Hover*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/lotlouischoitslab/Champaign-Urbana_Bus_Ridership">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Champaign-Urbana Mass Transit Bus Ridership Analysis and Prediction</button>
                </a>
                

              </div>
            </div>
          </div>

          

          {/*Grid Item*/}
          <div 
          style={{ backgroundImage: `url(${ktx})`}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/lotlouischoitslab/KTX_Ridership_Analysis">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>KTX Image Classification </button>
                </a>
              </div>
            </div>
          </div>
          
          {/*Grid Item*/}
          <div 
          style={{ backgroundImage: `url(${asam})`}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/lotlouischoitslab/GraphGeneration/tree/louis_simple_map">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DryVR++ Map Project</button>
                </a>
              </div>
            </div>
          </div>


          {/*Grid Item*/}
          <div style={{ backgroundImage: `url(${airline})`}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'
          >            
            {/*Hover*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/lotlouischoitslab/Airline_Satisfaction">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Airline Satisfaction</button>
                </a>
                

              </div>
            </div>
          </div>

          {/*Grid Item */}


          <div 
          style={{ backgroundImage: `url(${amtrak})`}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                
                <a href="https://github.com/lotlouischoitslab/Amtrak-Scheduling-Helper">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Amtrak Scheduling</button>
                </a>

              </div>
            </div>
          </div>

          {/*Grid Item*/}



          <div class = "w-50px h-50px bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${web})`}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                
                <a href="https://github.com/lotlouischoitslab/lotlouischoportfolio">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Portfolio Website</button>
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
