import React from 'react'
import asam from '../assets/opendrive.png'
import cumtd from '../assets/cumtd.jpg'
import amtrak from '../assets/amtrak.jpg'
import './css/Work.css'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-white'>WORK</p>
          <p className='text-2xl py-4'>Check out some of my recent projects for my work! 
          To view more projects that I have done, feel free to checkout my GitHub Repository. Click on the GitHub icon on the left.</p>
        </div>

      {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          
          {/*Grid Item*/}
          <div 
          style={{ backgroundImage: `url(${asam})`}}
          className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*Hover*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/lotlouischoitslab/GraphGeneration">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DryVR++ Map Project</button>
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
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Champaign-Urbana Bus Transit Analysis</button>
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




        </div>
      </div>
      </div>
  )
}

export default Work
