import React from 'react'
import './css/Contact.css'
import Linkedin from '../assets/linkedinlogo.png'
import Github from '../assets/github.png'
import Academic_img from '../assets/academic_img.png'
import CV_img from '../assets/cv.png'
import CV_Academic from "../assets/Louis_CV.pdf"
import Resume from "../assets/Louis_Resume.pdf"
import Scholar from "../assets/Google_Scholar_logo.png"
import Insta from "../assets/instagram.png"
import YT from "../assets/youtube.png"
import Discord from "../assets/discord.png"
import Meta from "../assets/meta_logo.png"
import X from "../assets/X.png"
import Medium from "../assets/medium.png"


const Contact = () => {
  return (
    <div name='contact' className="contact" id = "contactid">
      <div className="contact-title">
          CONTACT
      </div>
      <div className="contact-grid">
        <div className="social-link">
            <a href="https://www.linkedin.com/in/louis-sungwoo-cho/">
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
            <a href= {CV_Academic}>
              <img className="social-link-image" src={Academic_img} alt="CV icon"/>
              <p className="social-link-text">CV</p>
            </a>
          </div>

          <div className="social-link">
            <a href= {Resume}>
              <img className="social-link-image" src={CV_img} alt="CV icon"/>
              <p className="social-link-text">Resume</p>
            </a>
          </div>

          <div className="social-link">
            <a href= 'https://scholar.google.com/citations?user=scwfRdoAAAAJ&hl=en'>
              <img className="social-link-image" src={Scholar} alt="CV icon"/>
              <p className="social-link-text">Google Scholar</p>
            </a>
          </div>

          <div className="social-link">
            <a href= 'https://www.youtube.com/@lotlouischo'>
              <img className="social-link-image" src={YT} alt="YouTube icon"/>
              <p className="social-link-text">YouTube</p>
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
            <a href= 'https://x.com/LOTLOUISCHO7'>
              <img className="social-link-image" src={X} alt="X icon"/>
              <p className="social-link-text">X</p>
            </a>
          </div>
          <div className="social-link">
            <a href= 'https://medium.com/@louis.s.cho'>
              <img className="social-link-image" src={Medium} alt="Medium icon"/>
              <p className="social-link-text">Medium</p>
            </a>
          </div>



      </div> 
    </div>
  )
}

export default Contact 