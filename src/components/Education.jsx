import React from 'react'
import './css/Education.css'

class Education extends React.Component {
  render (){
  return (
    <div id='education' name='education' className='education'>
      <div className='education-title'>
        EDUCATION
      </div>
      <div className ="university-title">
            University of Illinois at Urbana-Champaign <span className = "title-colored"></span>
          </div>
          <div className = "education-date">
            August 2020 - May 2024 (Expected)
          </div>
          <ul class='education-description'>
            <li className='elem'>
              Pursuing a B.S in Civil & Environmental Engineering (Specialization: Transportation Engineering)
            </li>
            <li className='elem'>
              Pursuing a Minor in Computer Science (Focus Area: Artificial Intelligence & Big Data)
            </li>

          </ul> 
      
    </div>
  )
 }
}
export default Education
