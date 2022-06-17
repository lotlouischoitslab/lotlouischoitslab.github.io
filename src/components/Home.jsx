import React from 'react'
import './css/Home.css'
import Typist from 'react-typist'
import "react-typist/dist/Typist.css"
import FadeIn from 'react-fade-in'

class Home extends React.Component {
  render() {
      return (
          <div name = 'home' className="homepage" id ="homepage">
                  <Typist>
                      <span className="title">
                          {"Hello. I am "}
                          <span className="name">{"Louis Sungwoo Cho."}</span>
                          
                      </span>
                  </Typist>
              <FadeIn delay={1000}>
                <span className="sub-title">
                    Computational Transportation Scientist
                </span>
                <div className = "bio">
                  I am a Computational Transportation Scientist
                  enthusiastic about developing Autonomous Vehicles and Intelligent Transportation Systems (ITS) 
                  using Aritificial Intelligence (AI) and Internet of Things (IoT) to enhance mobility for Smart Cities.
                </div>
              </FadeIn>
            </div>
      );
  }
}

export default Home