import React from 'react'
import Louis from '../assets/louis_id.png'
import './css/About.css'


// const About = () => {
//   return (
//     <div name="about" className="aboutme w-full h-screen bg-black text-white p-8">
//         <div className="flex flex-col justify-center items-center w-full h-full">
//             <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
//                 <div className="sm:text-left pb-2 justify-left">
//                     <p className="text-2xl font-bold inline border-b-4 border-[white]">ABOUT ME</p>
//                 </div>
          
//                 </div>
//                 <div className="max-w-[1000px] w-auto grid sm:grid-cols-2 pb-3">
//                     <div className="text-1xl sm:text-left pl-100 max-w-[700px]">
//                         <p className='text-1xl sm:text-1xl'> I always envision how AI and IoT will change 
//                         the mobility system for smart cities. From deep learning autonomous vehicles to traffic lights controlled by machine learning,
//                         mobile computing for CAVS, and real time analysis in vehicle platooning and distributed database systems for traffic data management.
//                         Civil and environmental engineers and computer scientists have been given a mega-scale task to enhance our mobility systems for
//                         smart cities. I am definitely determined to automate our traffic systems and make traveling as efficient as possible.
//                         </p>
                        
//                     </div>
//                     <div className="text-2xl sm:text-left pl-100 max-w-[700px] p-4">
//                         <img className='w-80 h-80 pl-20' src={Louis}/>
                        
//                     </div>     
//                 </div>

//         </div>
//     </div>
//   )
// }

class About extends React.Component {
    render() {
        return(
            <div name="about" id ="aboutme" className="about">
                <div className="about-title">
                    ABOUT ME
                </div>
                <div className="about-grid">
                    <div className="about-bio">
                        I always envision how AI and IoT will change 
                        the mobility system for smart cities. From deep learning autonomous vehicles to traffic lights controlled by machine learning,
                        mobile computing for CAVS, and real time analysis in vehicle platooning and distributed database systems for traffic data management.
                        Civil and environmental engineers and computer scientists have been given a mega-scale task to enhance our mobility systems for
                        smart cities. I am definitely determined to automate our traffic systems and make traveling as efficient as possible.
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