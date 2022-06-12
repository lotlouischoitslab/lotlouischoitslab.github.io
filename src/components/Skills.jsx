import React from 'react'
import Python from '../assets/python.png'
import CPP from '../assets/cpp.png'
import Java from '../assets/java.png'
import Github from '../assets/github.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactJS from '../assets/react.png'

import './css/Skills.css'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-black text-gray-300 py-4'>
      {/*Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div> 
          <p className='text-4xl font-bold inline border-b-4 border-[white]'>SKILLS</p>
          <p className='text-3xl py-4'>CODING IN: </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python icon"/>
            <p className='my-4'>PYTHON</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CPP} alt="CPP icon"/>
            <p className='my-4'>C++</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="Java icon"/>
            <p className='my-4'>JAVA</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="GitHub icon"/>
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactJS} alt="REACTJS icon"/>
            <p className='my-4'>REACT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills