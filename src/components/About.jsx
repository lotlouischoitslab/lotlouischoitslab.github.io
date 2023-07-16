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
                <div className="about-box">
                    <div className="about-bio">
                        I was born in Boston, Massachusetts, and spent 9 years living in the United States before moving to Seoul, South Korea, 
                        where I lived for 11 years. I returned to the U.S and currently live in Urbana, Illinois. My fascination with 
                        transportation has been a lifelong passion, and I enjoy traveling by airplanes, trains, buses, and cars. With the 
                        advancements in AI and IoT, I am particularly interested in Intelligent Transportation Systems (ITS) and specialize in Motion 
                        Planning and Decision-Making Algorithms utilizing Deep Reinforcement Learning and Computer Vision for Autonomous Vehicles. 
                        Being fluent in both English and Korean allows me to navigate and communicate effectively in diverse settings. In my free time, 
                        I listen and sing Korean pop and rap songs, taste the flavors of Korean cuisine, and watch Korean movies and dramas. I also 
                        enjoy exploring the capabilities of ChatGPT. Looking ahead, I have ambitious plans to pursue graduate studies in order to
                        fulfill my dream of becoming a Computational Transportation Scientist, propelling me further in this exciting field.
                    </div>
                    <div className='about-img-container'>
                        <img src={Louis} className='about-image'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;