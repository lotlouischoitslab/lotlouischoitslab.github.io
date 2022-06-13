import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import CV from "../assets/louis_cv.pdf"
import {Link} from 'react-scroll'
import './css/Navbar.css'



const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='navbar fixed w-full h-[80px] flex justify-between items-centered px-4 bg-[black] text-white'>
        
        {/*Menu*/}

        <ul className="hidden md:flex"> {/*under 700 pixels thresho;d*/ }
            <li>
                <Link to="home" smooth={true} duration={500}>
                    HOME
                </Link>
            </li>

            <li>
                <Link to="about" smooth={true} duration={500}>
                    ABOUT
                </Link>
            </li>

            <li>
                <Link to="education" smooth={true} duration={500}>
                EDUCATION
                </Link>
            </li>

            <li>
                <Link to="skills" smooth={true} duration={500}>
                SKILLS
                </Link>
            </li>

            <li>
                <Link to="work" smooth={true} duration={500}>
                WORK
                </Link>
            </li>

            <li>
                <Link to="contact" smooth={true} duration={500}>
                CONTACT
                </Link>
            </li>
            
        </ul>
        
        {/*Hamburger */}
        <div onClick={handleClick} className = 'py-4 md:hidden z-10'>
            {!nav ? <FaBars/>: <FaTimes/>}
        </div>

        {/*Mobile Menu*/}
        <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'}>
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                    HOME
                </Link></li> 
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                    ABOUT
                </Link></li>
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick}  to="education" smooth={true} duration={500}>
                    EDUCATION
                </Link></li>
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    SKILLS
                </Link>
            </li>
            <li className = 'py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    WORK
                </Link>
            </li>
            <li className = 'py-6 text-4xl'>
            <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                    CONTACT
                </Link>
            </li>
        </ul>

        {/*Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300' href = "https://www.linkedin.com/in/louis-sungwoo-cho-978502194/">
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                <a className='flex justify-between items-center w-full text-gray-300' href = "https://github.com/lotlouischoitslab?tab=repositories">
                    GitHub <FaGithub size={30}/>
                </a>
            </li>
            
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href = {CV}>
                    CV <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
           
        </ul>
        </div>
    </div>
    )
}

export default Navbar;
