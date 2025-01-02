import React, {useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handileClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
             <img src={Logo} alt='Logo image' style={{width: '50px'}} />
        </div>

        {/* menu */}
        
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>
   

        {/* Hamburger */}
        <div onClick={handileClick} className='md:hidden z-10'>
            { !nav ? <FaBars /> : <FaTimes /> }
        </div>
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handileClick} to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handileClick} to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handileClick} to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handileClick} to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>


        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-insta-gradient'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/soorajkg22/">
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <RouterLink to='portfolio/resume' className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </RouterLink>
                </li>
            </ul>
        </div>

        {/* social icons */}
        <div className='lg:hidden fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:bg-blue-500 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:bg-[#333333] bg-[#3b3b3b]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:bg-insta-gradient bg-insta-gradient'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/soorajkg22/">
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:bg-[#636c76] bg-[#565f69]'>
                    <RouterLink to='portfolio/resume' className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
