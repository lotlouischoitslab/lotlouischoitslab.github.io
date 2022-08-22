import React from 'react'
import Louis from '../assets/louis_id.png'
import './css/About.css'

class About extends React.Component {
    render() {
        return(
            <div name="about" id ="aboutme" className="about">
                <div className="about-title">
                    ABOUT ME
                </div>
                <div className="about-grid">
                    <div className="about-bio">
                        I was born in Boston, Massachusetts and lived in the U.S for 9 years before moving to South Korea where I lived in Seoul for 11 years. I moved back to the U.S and I am currently living in Urbana, Illinois.
                        I have always been fascinated about transportation and enjoy traveling by airplanes, trains and cars.
                        With AI and IoT enhancing our mobility, my interests in Intelligent Transportation Systems (ITS) are motion planning and decision-making
                        algorithms using deep reinforcement learning and computer vision for autonomous vehicles. I am fluent in both English and Korean.
                        My hobbies are listening and singing Korean pop and rap songs, eating Korean food, and watching Korean movies. 
                        I have further plans going to graduate school to pursue my dream of becoming an innovative Computational Transportation Scientist (CTS).
                    </div>
                    <div className='about-img'>
                        <img src={Louis}/>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default About;