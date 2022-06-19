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
                        As a Computational Transportation Scientist, I always envision how AI and IoT will change 
                        our mobility system smart cities. From deep learning autonomous vehicles to traffic lights controlled by machine learning algorithms, optimization in transit planning,
                        mobile computing, wireless communication and real time analysis in vehicle platooning for CAVs, and distributed database systems for traffic data management,
                        civil and environmental engineers and computer scientists have been given a mega-scale task to enhance our mobility systems for
                        smart cities. I am very enthusiastic about ITS and automating our transportation systems to make traveling as efficient as possible.
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