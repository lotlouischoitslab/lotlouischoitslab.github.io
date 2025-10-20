import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Man from '../assets/man.png';
import './css/Navbar.css'; // Import the CSS file for the navbar styles

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = () => setNav(!nav);

  return (
    <div className="navbar-container">
      <div>
        <img src={Man} alt="Logo Image" style={{ width: '30px' }} />
      </div>

      {/* Desktop Menu */}

      <ul className="desktop-menu">
        <li
            className={hoveredItem === 'home' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('home')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="home" smooth={true} duration={500}>
                HOME
            </Link>
            </li>

        {/* Rest of the list items */}

        <li
            className={hoveredItem === 'about' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('about')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="about" smooth={true} duration={500}>
                ABOUT
            </Link>
            </li>

            <li
            className={hoveredItem === 'education' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('education')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="education" smooth={true} duration={500}>
                EDUCATION
            </Link>
            </li>

                        <li
            className={hoveredItem === 'licenses' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('licenses')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="licenses" smooth={true} duration={500}>
                LICENSES
            </Link>
            </li>

            <li
            className={hoveredItem === 'experiences' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('experiences')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="experiences" smooth={true} duration={500}>
                EXPERIENCES
            </Link>
            </li>

            <li
            className={hoveredItem === 'publications' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('publications')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="publications" smooth={true} duration={500}>
                PUBLICATIONS
            </Link>
            </li>

            <li
            className={hoveredItem === 'awards' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('awards')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="awards" smooth={true} duration={500}>
                AWARDS
            </Link>
            </li>



            <li
            className={hoveredItem === 'skills' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('skills')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="skills" smooth={true} duration={500}>
                SKILLS
            </Link>
            </li>

            <li
            className={hoveredItem === 'projects' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('projects')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="projects" smooth={true} duration={500}>
                PROJECTS
            </Link>
            </li>

            <li
            className={hoveredItem === 'contact' ? 'nav-item-hover' : ''}
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to="contact" smooth={true} duration={500}>
                CONTACTS
            </Link>
            </li>
  
      </ul>

      

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden hamburger-icon">
        {!nav ? <FaBars /> : <FaTimes />}
     </div>


      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'mobile-menu'}>
        <li
          className={hoveredItem === 'home' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('home')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>

        {/* Rest of the list items */}

        <li
          className={hoveredItem === 'about' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('about')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>

        <li
          className={hoveredItem === 'education' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('education')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="education" smooth={true} duration={500}>
            EDUCATION
          </Link>
        </li>

                <li
          className={hoveredItem === 'licenses' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('licenses')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="licenses" smooth={true} duration={500}>
            LICENSES
          </Link>
        </li>

        <li
          className={hoveredItem === 'experiences' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('experiences')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="experiences" smooth={true} duration={500}>
            EXPERIENCES
          </Link>
        </li>

        <li
          className={hoveredItem === 'publications' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('publications')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="publications" smooth={true} duration={500}>
            PUBLICATIONS
          </Link>
        </li>

        <li
          className={hoveredItem === 'awards' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('awards')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="awards" smooth={true} duration={500}>
            AWARDS
          </Link>
        </li>

        <li
          className={hoveredItem === 'skills' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('skills')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>

        <li
          className={hoveredItem === 'projects' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('projects')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>

        <li
          className={hoveredItem === 'contact' ? 'nav-item-hover' : ''}
          onMouseEnter={() => setHoveredItem('contact')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            CONTACTS
          </Link>
        </li>


      </ul>
    </div>
  );
};

export default Navbar;