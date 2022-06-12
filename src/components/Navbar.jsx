import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/man.png"


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-centered px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src = {Logo} alt= "Logo Image" style={{width: '50px'}} />
        </div>
        {/*Menu*/}

        <ul className="hidden md:flex"> {/*under 700 pixels thresho;d*/ }
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SKILLS</li>
            <li>WORK</li>
            <li>CONTACT</li>
        </ul>
        
        {/*Hamburger */}
        <div onClick={handleClick} className = 'md:hidden z-10'>
            {!nav ? <FaBars/>: <FaTimes/>}
        </div>
        {/*Mobile Menu*/}
        <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'}>
            <li className = 'py-6 text-4xl'>HOME</li> 
            <li className = 'py-6 text-4xl'>ABOUT</li>
            <li className = 'py-6 text-4xl'>SKILLS</li>
            <li className = 'py-6 text-4xl'>WORK</li>
            <li className = 'py-6 text-4xl'>CONTACT</li>
        </ul>

        {/*Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300'>
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] duration-300 bg-black'>
                <a className='flex justify-between items-center w-full text-gray-300'>
                    GitHub <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'>
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'>
                    CV <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
           
        </ul>
        </div>
    </div>
    )
}

export default Navbar;
