import React from 'react'
import './css/Contact.css'
import Linkedin from '../assets/linkedinlogo.png'
import Github from '../assets/github.png'
import CV_img from '../assets/cv.png'
import CV from "../assets/Louis_Sungwoo_Cho_CV.pdf"
import Insta from "../assets/instagram.png"
import Discord from "../assets/discord.png"
import Meta from "../assets/meta_logo.png"
import X from "../assets/X.png"


const Contact = () => {
  return (
    <div name='contact' className="contact" id = "contactid">
      <div className="contact-title">
          CONTACT
      </div>
      <div className="contact-grid">
        <div className="social-link">
            <a href="https://www.linkedin.com/in/louis-sungwoo-cho-978502194/">
              <img className="social-link-image" src={Linkedin} alt="Linkedin icon" />
              <p className="social-link-text">LinkedIn</p>
            </a>
          </div>

          <div className="social-link">
            <a href="https://github.com/lotlouischoitslab">
              <img className="social-link-image" src={Github} alt="GitHub icon" />
              <p className="social-link-text">GITHUB</p>
            </a>
          </div>

          <div className="social-link">
            <a href= {CV}>
              <img className="social-link-image" src={CV_img} alt="CV icon"/>
              <p className="social-link-text">CV</p>
            </a>
          </div>

          <div className="social-link">
            <a href= 'https://www.instagram.com/lotlouischolabs/'>
              <img className="social-link-image" src={Insta} alt="Instagram icon"/>
              <p className="social-link-text">Instagram</p>
            </a>
          </div>

          <div className="social-link">
            <a href= 'https://discord.com/channels/@lotlouischo#8034'>
              <img className="social-link-image" src={Discord} alt="Discord icon"/>
              <p className="social-link-text">Discord</p>
            </a>
          </div>

          <div className="social-link">
            <a href= 'https://www.facebook.com/louis.sw.cho'>
              <img className="social-link-image" src={Meta} alt="Meta icon"/>
              <p className="social-link-text">Meta</p>
            </a>
          </div>
          <div className="social-link">
            <a href= 'https://x.com/LouisC61470'>
              <img className="social-link-image" src={X} alt="X icon"/>
              <p className="social-link-text">X</p>
            </a>
          </div>
      </div> 
    </div>
  )
}

export default Contact 
