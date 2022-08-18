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
                        Growing up in South Korea, I have always been fascinated about transportation networks. I enjoy traveling by airplanes, trains and cars and tried various delicious food.
                        With AI and IoT enhancing our mobility, my interests in Intelligent Transportation Systems (ITS) are motion planning 
                        algorithms using deep reinforcement learning, computer vision, and perception for autonomous vehicles, 
                        machine learning and data science for analyzing and forecasting traffic trends, optimizing transit planning, mobile computing, wireless communication and 
                        real time analysis for vehicle platooning. I am fluent in both English and Korean.
                        My hobbies are listening and singing Korean pop and rap songs, eating Korean food, and watching Korean TV shows and dramas.
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