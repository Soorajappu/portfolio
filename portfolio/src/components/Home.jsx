import React , { useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import ProfilePhoto from '../assets/sooraj.jpg'

function Home() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);


  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-[60px] flex flex-col justify-center h-full'>
        <div className='p-4'>
            <img src={ProfilePhoto} alt="Profile Image" className='rounded-full mx-auto w-48 h-48 object-cover'/>
        </div>
            <p className='text-[#4ca3d8] text-3xl'>Hi, I'm Sooraj K G a passionate Python Django Developer.</p>
            <p className='text-[#8892b0] py-4  max-w-[1000px] text-justify'>
                I specialize in building scalable web applications with Python and Django on the backend. As a recent graduate and a fresher, I'm continuously expanding my skill set to include modern frontend technologies. Currently, I am learning React and Tailwind CSS to create dynamic, responsive user interfaces.
                With a strong foundation in web development and a growth mindset, I am excited to contribute to innovative projects while enhancing my full-stack development skills.            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4ca3d8] hover:border-[#4ca3d8]'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        View Work
                    </Link>
                </button>
            </div>

        </div>

    </div>
  )
}

export default Home