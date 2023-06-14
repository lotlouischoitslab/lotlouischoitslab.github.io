import React from 'react'
import './css/Contact.css'
import Linkedin from '../assets/linkedinlogo.png'
import Github from '../assets/github.png'
import CV_img from '../assets/cv.png'
import CV from "../assets/Louis_Final_CV.pdf"
import Insta from "../assets/instagram.png"
import Discord from "../assets/discord.png"
import Meta from "../assets/meta_logo.png"


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
              <p className='socials'>LinkedIn</p>
            </a>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href="https://github.com/lotlouischoitslab">
              <img className='w-20 mx-auto' src={Github} alt="GitHub icon"/>
              <p className='socials'>GITHUB</p>
            </a>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href= {CV}>
              <img className='w-20 mx-auto' src={CV_img} alt="CV icon"/>
              <p className='socials'>CV</p>
            </a>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href= 'https://www.instagram.com/lotlouischolabs/'>
              <img className='w-20 mx-auto' src={Insta} alt="Instagram icon"/>
              <p className='socials'>Instagram</p>
            </a>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href= 'https://discord.com/channels/@lotlouischo#8034'>
              <img className='w-20 mx-auto' src={Discord} alt="Discord icon"/>
              <p className='socials'>Discord</p>
            </a>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 inline-block'>
            <a href= 'https://www.facebook.com/louis.sw.cho'>
              <img className='w-20 mx-auto' src={Meta} alt="Meta icon"/>
              <p className='socials'>Meta</p>
            </a>
          </div>
      </div> 
    </div>
  )
}

export default Contact 
