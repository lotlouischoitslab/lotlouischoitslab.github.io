import React from 'react'
import './css/Home.css'
import "react-typist/dist/Typist.css"
import FadeIn from 'react-fade-in'
import Typed from 'react-typed'

class Home extends React.Component {
  render() {
      return (
          <div name = 'home' className="homepage" id ="homepage">
                  <div className="title">
                    <Typed strings = {[
                          "Hello. I am Louis Sungwoo Cho."
                      ]}
                      typeSpeed={70}
                      backSpeed={70}
                      loop
                      />
                  </div>
                  
              <FadeIn delay={1000}>
                <span className="sub-title">
                    Avid Computational Transportation Science Enthusiast
                </span>
                <div className = "bio">
                  I am Louis Sungwoo Cho (조성우), an avid Computational Transportation Science Enthusiast
                  passionate about developing Autonomous Vehicles and Intelligent Transportation Systems (ITS) 
                  using Artificial Intelligence (AI) and Internet of Things (IoT) to enhance mobility in Smart Cities.
                </div>
              </FadeIn>
            </div>
      );
  }
}

export default Home