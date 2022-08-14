import React from 'react'
import './css/Experiences.css'
import ExperienceTabs from './ExperienceTabs'

class Experiences extends React.Component {
    render () {
        return (
            <div id='experiences' name='experiences' className='experiences'>
                <div className='experiences-title'>
                    EXPERIENCES
                </div>
                <div className='experience-list'>
                    <ExperienceTabs/>
                </div>
            </div>
        )
    }
}
export default Experiences;