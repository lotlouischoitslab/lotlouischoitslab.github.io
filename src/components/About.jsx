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
                        I was born in Boston, Massachusetts, then lived in Seoul, South Korea for 11 years before moving back 
                        to the U.S. I’m currently in Champaign–Urbana, Illinois. Growing up in two different countries made me 
                        bilingual in English and Korean and gave me a unique look at how cities move people around. I’ve always
                        loved transportation systems such as Robotaxis, cars, planes, trains, and buses. That curiosity led me 
                        into Intelligent Transportation Systems and eventually into autonomous vehicle research. Outside of 
                        engineering, I like traveling, listening to pop music, trying different foods, and watching movies.

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