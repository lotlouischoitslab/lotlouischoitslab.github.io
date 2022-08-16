import React from 'react'
import './css/Experiences.css'
class Experiences extends React.Component {
    render () {
        return (
            <div id='experiences' name='experiences' className='experiences'>
                <div className='experiences-title'>
                    EXPERIENCES
                </div>
                
                <div className ="job-title">
                    Research Assistant @ Reliable Autonomy Group UIUC
                </div>
                <div className ="professor">
                    Advised by Professor Sayan Mitra, Electrical & Computer Engineering @ UIUC
                </div>
                <div className = "job-date">
                    May 2022 - Present
                </div>
                <div className='project-name'>
                    DryVR++ Lane Map Generator
                </div>
                <div className = "sub-job-date">
                    May 2022 - August 2022
                </div>
                <ul class='job-description'>
                    <li className='elem'>
                    Created parsing function to read road geometry from ASAM Opendrive files.
                    </li>
                    <li className='elem'>
                    Plotted road geometry for data visualization.
                    </li>
                    <li className='elem'>
                    Generated lanes for autonomous driving simulators.
                    </li>

                </ul> 
            </div>
        )
    }
}
export default Experiences;