import React from 'react'
import Python from '../assets/python.png'
import CPP from '../assets/cpp.png'
import Java from '../assets/java.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactJS from '../assets/react.png'
import SQL from '../assets/sql.png'
import MongoDB from '../assets/mongodb.png'
import NodeJS from '../assets/nodejs.png'
import Neo4j from '../assets/neo4j.png'
import MATLAB from '../assets/matlab.png'

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
                <img className='w-20 mx-auto' src={Java} alt="Java icon"/>
                <p className='coding-lang'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CPP} alt="CPP icon"/>
                <p className='coding-lang'>C++</p>
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
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={SQL} alt="REACTJS icon"/>
                <p className='coding-lang'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MongoDB} alt="REACTJS icon"/>
                <p className='coding-lang'>MONGODB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NodeJS} alt="REACTJS icon"/>
                <p className='coding-lang'>NodeJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Neo4j} alt="REACTJS icon"/>
                <p className='coding-lang'>Neo4j</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MATLAB} alt="REACTJS icon"/>
                <p className='coding-lang'>MATLAB</p>
              </div> */}
            </div>
            
        </div>  
      );
  }
}

export default Skills