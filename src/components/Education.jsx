import React from 'react'
import './css/Education.css'
import EducationTabs from './EducationTabs'

class Education extends React.Component {
  render (){
  return (
    <div id='education' name='education' className='education'>
      <div className='education-title'>
        EDUCATION
      </div>
      <div className='experience-list'>
          <EducationTabs/>
      </div>
    </div>
  )
 }
}
export default Education
