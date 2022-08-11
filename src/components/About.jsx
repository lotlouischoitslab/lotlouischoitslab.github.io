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
                        Growing up, I have always been enthusiastic about transportation systems from airplanes, trains to cars. Traveling is one of my favorite hobbies.
                        With AI and IoT enhancing our mobility, my interests in Intelligent Transportation Systems (ITS) are deep learning and computer vision for autonomous vehicles,  
                        wireless communication and real time analysis in vehicle platooning, machine learning and data science for analyzing traffic trends, and optimizing transit planning for smart cities.
                        Other than traveling aroud, my hobbies include listening and singing Korean pop and rap songs, eating Korean food, watching Korean TV shows and dramas, and photography.
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