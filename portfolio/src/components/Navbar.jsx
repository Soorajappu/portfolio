import React, {useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [activeSection, setActiveSection] = useState('home'); // Track active section

    const handleClick = () => setNav(!nav);

    const handleSetActive = (section) => {
        setActiveSection(section);
    };


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className="p-2">
             <img src={Logo} alt='Logo image' style={{width: '80px'}} />
        </div>
        
        {/* Menu */}
        <ul className="hidden md:flex">
            <li
                className={`${
                activeSection === 'home'
                    ? 'underline underline-offset-8 text-cyan-400'
                    : 'text-gray-300'
                }`}
            >
                <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('home')} // Properly set active section
                >
                Home
                </Link>
            </li>
            <li
                className={`${
                activeSection === 'skills'
                    ? 'underline underline-offset-8 text-cyan-400'
                    : 'text-gray-300'
                }`}
            >
                <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('skills')} // Properly set active section
                >
                Skills
                </Link>
            </li>
            <li
                className={`${
                activeSection === 'work'
                    ? 'underline underline-offset-8 text-cyan-400'
                    : 'text-gray-300'
                }`}
            >
                <Link
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('work')} // Properly set active section
                >
                Work
                </Link>
            </li>
            <li
                className={`${
                activeSection === 'contact'
                    ? 'underline underline-offset-8 text-cyan-400'
                    : 'text-gray-300'
                }`}
            >
                <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => handleSetActive('contact')} // Properly set active section
                >
                Contact
                </Link>
            </li>
        </ul>

   

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 flex'>
            <div className="mr-2 px-8 bottom-1 relative cursor-pointer rounded-md
                w-[35px] h-[35px] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
                 before:bg-[conic-gradient(transparent,transparent,#00a6ff)] before:animate-spin-slow
            ">
                <div className='flex absolute justify-center align-middle top-1 bottom-1 left-1 right-1 bg-[#0a192f]'>
                    <h6 className={`${activeSection === 'home' ? '' : 'hidden'}`}>Home</h6>
                    <h6 className={`${activeSection === 'skills' ? '' : 'hidden'}`}>Skills</h6>
                    <h6 className={`${activeSection === 'work' ? '' : 'hidden'}`}>Works</h6>
                    <h6 className={`${activeSection === 'contact' ? '' : 'hidden'}`}>Contacts</h6>
                </div>
            </div>
            { !nav ? <FaBars /> : <FaTimes /> }
        </div>
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
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
        <div className='lg:hidden fixed flex w-screen items-center justify-center top-[88vh] left-0'>
            <ul className='flex gap-4 bg-[#0a192f] rounded-full px-4 py-1'>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:bg-blue-500 bg-blue-600 rounded-full'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:bg-[#333333] bg-[#3b3b3b] rounded-full'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/">
                        <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:bg-insta-gradient bg-insta-gradient rounded-full'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/soorajkg22/">
                        <FaInstagram size={30} />
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:bg-[#636c76] bg-[#565f69] rounded-full'>
                    <RouterLink to='portfolio/resume' className='flex justify-between items-center w-full text-gray-300'>
                        <BsFillPersonLinesFill size={30} />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
