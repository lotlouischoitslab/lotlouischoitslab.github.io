import React from "react";
import LOT_STEM from "../assets/stem.png";
import travel_report from "../assets/Louis_Charles_Travel_Report.pdf";
import charles from "../assets/charles.jpg";
import graic from "../assets/graic.png";
import chic_st_louis from "../assets/chic_st_louis.png";
import ktx_cheong from "../assets/ktx_cheongryong.png";
import mof from "../assets/mof.png";
import av_sim from "../assets/av_sim.png";
import cav_road from "../assets/cav_road.jpg";
import spaceship from "../assets/spaceship.png";
import transpo from "../assets/transportation.png";
import cumtd from "../assets/cumtd.jpg";
import ohare from "../assets/ohare.png";
import ktx from "../assets/ktx.png";
import airline from "../assets/a350.png";
import amtrak from "../assets/amtrak.jpg";
import web from "../assets/web.png";
import urban from "../assets/urban.png";
import "./css/Projects.css";

class Projects extends React.Component {
  render() {
    const projects = [
      { img: LOT_STEM,   link: "https://lotlouischoitslab.github.io/lotlouischo_stem_club.github.io/", title: "LOTLOUISCHO STEM CLUB" },
      { img: charles,    link: travel_report, title: "Charles De Leuw Travel Report" },
      { img: graic,      link: "https://youtu.be/PtBUiRwEzz0", title: "GRAIC Autonomous Driving Race Competition" },
      { img: chic_st_louis, link: "https://docs.google.com/presentation/d/1pj6C-knIghAueX_ljLOivago2Qncm7ppOQWKqFb2tOw/edit?usp=sharing", title: "Chicago–St. Louis High-speed Rail Proposal" },
      { img: ktx_cheong, link: "https://github.com/lotlouischoitslab/South_Korea_High-speed_Rail_Planning", title: "South Korea High-speed Rail Planning" },
      { img: mof,        link: "https://github.com/lotlouischoitslab/ITE_UIUC_EOH_2024_Mobility_for_Our_Future", title: "Mobility for Our Future" },
      { img: av_sim,     link: "https://github.com/lotlouischoitslab/Autonomous_Vehicles_Simulator", title: "Autonomous Vehicles Simulator" },
      { img: cav_road,   link: "https://github.com/lotlouischoitslab/CAV_Traffic_Simulation_ChatGPT", title: "Connected & Automated Vehicles Simulator using ChatGPT" },
      { img: spaceship,  link: "https://github.com/lotlouischoitslab/Spaceship_Titanic", title: "Spaceship Titanic Kaggle Challenge" },
      { img: transpo,    link: "https://github.com/lotlouischoitslab/Transportation_Engineering", title: "Computational Transportation Science (CTS) Open Source" },
      { img: cumtd,      link: "https://github.com/lotlouischoitslab/CUMTD_Bus_Analysis_Classification", title: "CUMTD Bus Ridership Analysis & Classification" },
      { img: ohare,      link: "https://github.com/lotlouischoitslab/Direct-Flight-Airport-Connections", title: "Direct Airport Connections Database" },
      { img: ktx,        link: "https://github.com/lotlouischoitslab/KTX_Ridership_Analysis", title: "KTX Image Classification" },
      { img: airline,    link: "https://github.com/lotlouischoitslab/Airline_Satisfaction", title: "Airline Satisfaction Analysis" },
      { img: amtrak,     link: "https://github.com/lotlouischoitslab/Amtrak-Scheduling-Helper", title: "Amtrak Scheduling" },
      { img: web,        link: "https://github.com/lotlouischoitslab/lotlouischoportfolio", title: "Portfolio Website" },
      { img: urban,      link: "https://illinois.digication.com/abc-louis-sungwoo-cho/home-1", title: "Urban Neighborhood Planning & CAD Design" }
    ];

    return (
      /* Anchor id matches nav target: #projects */
      <section id="projects" className="projects">
        <div id="projectsid">
          <h2 className="projects-title">PROJECTS</h2>
          <p className="projects-description">Check out my projects!</p>

          <div className="my-projects">
            <div className="projects-container">
              {projects.map((p, i) => (
                <article
                  key={i}
                  style={{ backgroundImage: `url(${p.img})` }} /* let CSS handle size/height */
                  className="shadow-lg shadow-black group rounded-md flex justify-center items-center mx-auto content-div"
                >
                  <div className="hover-effect">
                    <div className="centered-content">
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        <button className="small-button">{p.title}</button>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
