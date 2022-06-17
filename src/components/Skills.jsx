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

class Skills extends React.Component {
  render () {
    return (
        <div name='skills' id='skillsid' className='skills'>
            <div className='skills-title'> 
              SKILLS
            </div>
            <div className='coding-in'>
              CODING IN:
            </div>
            <div className='skills-grid'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="Python icon"/>
                <p className='coding-lang'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CPP} alt="CPP icon"/>
                <p className='coding-lang'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="Java icon"/>
                <p className='coding-lang'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://github.com/lotlouischoitslab?tab=repositories">
                  <img className='w-20 mx-auto' src={Github} alt="GitHub icon"/>
                  <p className='coding-lang'>GITHUB</p>
                </a>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='coding-lang'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                <p className='coding-lang'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                <p className='coding-lang'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactJS} alt="REACTJS icon"/>
                <p className='coding-lang'>REACT</p>
              </div>
            </div>
            
        </div>  
      );
  }
}

export default Skills