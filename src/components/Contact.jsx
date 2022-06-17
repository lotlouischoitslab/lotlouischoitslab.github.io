import React from 'react'
import './css/Contact.css'
import Linkedin from '../assets/linkedinlogo.png'
import Github from '../assets/github.png'
import CV_img from '../assets/cv_img.png'
import CV from "../assets/louis_cv.pdf"
import './css/Social_icons.css'

const Contact = () => {
  return (
    <div name='contact' className="contact" id = "contactid">
      <div className="contact-title">
          CONTACT
      </div>
      <div className="contact-grid">
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href="https://www.linkedin.com/in/louis-sungwoo-cho-978502194/">
              <img className='w-20 mx-auto' src={Linkedin} alt="LinkedIn icon"/>
              <p className='coding-lang'>Linkedin</p>
            </a>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href="https://github.com/lotlouischoitslab?tab=repositories">
              <img className='w-20 mx-auto' src={Github} alt="GitHub icon"/>
              <p className='coding-lang'>GITHUB</p>
            </a>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href= {CV}>
              <img className='w-20 mx-auto' src={CV_img} alt="CV icon"/>
              <p className='coding-lang'>CV</p>
            </a>
          </div>


      </div>
      <div className="contact-me">
        Please submit the form below or shoot me an email to louis.sw.cho@gmail.com
      </div>
        
      <form method='POST' action="https://getform.io/f/c752447b-bad0-4251-96fb-699ef977beb6" className="myforms flex flex-col max-w-[1000px]">
      
        <input className= 'bg-[white] p-1' type="text" rows="2" placeholder="Name" name='name' />
        <input className= 'my-1 bg-[white] p-1' type="email" rows="2" placeholder="Email" name='email' />
        <textarea className= 'bg-[white] p-2' name="message" rows="4" placeholder="Message"></textarea>
        <button className= 'text-white border-2 hover:bg-white hover:border-white px-4 pb-1 my-2 mx-auto flex items-center'>Let's Collaborate!</button>
      </form>
    </div>
  )
}

export default Contact 
