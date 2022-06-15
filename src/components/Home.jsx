import React from 'react'
import './css/Home.css'
import Typist from 'react-typist'
import FadeIn from 'react-fade-in'

// const Home = () => {
//   return (
//     <div name='home' className="homepage">
//         {/*Container*/}
//         <div id='intro'>
          
//           <Typist>
//             <span className="title">
//               {"Hello. I am"}
//               <span className="name">{"Louis Sungwoo Cho"}</span>
//             </span>
//           </Typist>
//           <FadeIn delay={1000}>
//             <span className="sub-title">
//               Transportation Engineer and Computer Scientist
//             </span>
//             <div className="bio">
//                 I am an aspiring Transportation Engineer and a Computer Scientist
//                 enthusiastic about developing Autonomous Vehicles and Intelligent Transportation Systems (ITS) 
//                 using Aritificial Intelligence (AI) and Internet of Things (IoT). I have always envisioned how urban mobility would look like in
//                 futuristic Smart Cities.
//             </div>
//           </FadeIn>
//             {/* <p className= 'text-2xl sm:text-2xl font-bold text-[white]'>Hello. My name is</p>
//             <h1 className='text-3xl sm:text-5xl font-bold text-[white]'>Louis Sungwoo Cho</h1>
//             <h1 className='text-2xl sm:text-2xl font-bold text-[white]'>조성우</h1>
//             <h2 className='text-2xl sm:text-2xl font-bold text-[white]'>I am a Transportation Engineer and a Computer Scientist</h2>
//             <p className='text-[white] py-4 max-w-full'>I am an aspiring Transportation Engineer and a Computer Scientist
//                 enthusiastic about developing Autonomous Vehicles and Intelligent Transportation Systems (ITS) 
//                 using Aritificial Intelligence (AI) and Internet of Things (IoT). I have always envisioned how urban mobility would look like in
//                 futuristic Smart Cities.
//             </p> */}
            
//         </div>
//     </div>
//   )
// }

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
                    Transportation Engineer and a Computer Scientist.
                </span>
                <div className = "bio">
                  I am an aspiring Transportation Engineer and a Computer Scientist
                  enthusiastic about developing Autonomous Vehicles and Intelligent Transportation Systems (ITS) 
                  using Aritificial Intelligence (AI) and Internet of Things (IoT). I have always envisioned how urban mobility would look like in
                  futuristic Smart Cities.
                </div>
              </FadeIn>
            </div>
      );
  }
}

export default Home