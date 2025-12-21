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
                        I currently work at Chicago, Illinois. Originally, I was born in Boston, Massachusetts and lived there for 9
                        years before moving to Seoul, South Korea and grew up in Seoul for 11 years. I moved to Champaign-Urbana area to pursue 
                        a M.S. and B.S. Honors in Civil Engineering specializing in Transportation and to minor in Computer Science. 
                        Experiencing two different countries made me bilingual in English and Korean and gave me a unique look at how cities 
                        move people around. I’ve always loved transportation systems such as Robotaxis, cars, planes, trains, and buses. That 
                        curiosity led me into Intelligent Transportation Systems and eventually into autonomous vehicle research. Outside of 
                        engineering, I like traveling, listening to pop music, playing around with the Rubik's cube, trying different foods, 
                        and watching movies.

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