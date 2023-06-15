import React from 'react'
import './css/Experiences.css'
class Experiences extends React.Component {
    render () {
        return (
            <div id='experiences' name='experiences' className='experiences'>
                <div className='experiences-title'>
                    EXPERIENCES
                </div>

                {/*Experience List Startpoint */}
                <div className ="job-title">
                    Undergraduate Researcher @ Smart City Laboratory UIUC
                </div>
                
                <div className = "job-date">
                    May 2023 - Present
                </div>
            
                <ul class='job-description'>
                    <li className='elem'>
                    Assisting Professor Alireza Talebpour, Civil & Environmental Engineering (Transportation) @ UIUC
                    </li>
                    <li className='elem'>
                    Currently doing research in Multi-agent Deep Reinforcement Learning and GPT based Framework for Traffic Shaping
                    </li>
                    {/* <li className='elem'>
                    Currently doing research in Multi-agent Deep Reinforcement Learning and GPT based Framework for Traffic Shaping
                    </li> */}
                    


                    
                    
                </ul> 
                
                {/*Experience List Endpoint */}


                {/*Experience List Startpoint */}
                <div className ="job-title">
                    President @ Institute of Transportation Engineers UIUC Chapter
                </div>
                
                <div className = "job-date">
                    August 2022 - Present
                </div>
                <ul class='job-description'>
                    <li className='elem'>
                        Currently in charge of organizing and hosting transportation conferences and seminars
                    </li>
                    <li className='elem'>
                        Connecting prosepective students and networking with transportation professionals
                    </li>
                    
                    <li className='elem'>
                        Contributed to building the website for ITE@UIUC:
                        <a href="https://ite.cee.illinois.edu/"> Click Here</a>
                    </li>

                    <li className='elem'>
                        Mentoring Civil and Environmental Engineering (Transportation) Majors, Computer Science Majors and Minors
                    </li>
                    <li className='elem'>
                        Lead Exhibitor at the UIUC Engineering Open House for ITE@UIUC
                    </li>
                </ul> 
                {/*Experience List Endpoint */}


                {/*Experience List Startpoint */}
                <div className ="job-title">
                    Undergraduate Researcher @ Human-Centered Autonomy Laboratory UIUC
                </div>
                
                <div className = "job-date">
                    January 2023 - May 2023
                </div>
            
                <ul class='job-description'>
                    <li className='elem'>
                    Assisted Professor Katherine Driggs-Campbell, Electrical & Computer Engineering @ UIUC
                    </li>
                    <li className='elem'>
                    Currently doing research in Optimized TransFuser in CARLA Simulator using Reinforcement Learning
                    </li>
                    <li className='elem'>
                    Developing an End-to-End Autonomous Driving Model using Neural Networks
                    </li>
                    <li className='elem'>
                    Investigating on retrieving motion-planning data using various sensors
                    </li>

                    
                </ul> 
                
                {/*Experience List Endpoint */}


                

                {/*Experience List Startpoint */}
                <div className ="job-title">
                    Research Assistant @ Reliable Autonomy Group UIUC
                </div>
            
                <div className = "job-date">
                    May 2022 - August 2022
                </div>
            
                <ul class='job-description'>
                
                    <li className='elem'>
                    Assisted Professor Sayan Mitra, Electrical & Computer Engineering @ UIUC
                    </li>
                    <li className='elem'>
                    Contributed to Verse Lane Map Generator for Control Verification
                    </li>
                    <li className='elem'>
                    Parsed road attributes from ASAM OpenDRIVE files into Python files
                    </li>
                    <li className='elem'>
                    Created a data visualizing function to draw the road attributes inside the ASAM OpenDRIVE file
                    </li>
                    <li className='elem'>
                        Generated multiple lanes from the file parser into the control verification simulators
                    </li>
                </ul> 
                {/*Experience List Endpoint */}


            </div>
        )
    }
}
export default Experiences;