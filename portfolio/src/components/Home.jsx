import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#4ca3d8] text-3xl'>Hi, I'm Sooraj K G a passionate Python Django Developer.</p>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I specialize in building scalable web applications with Python and Django on the backend. As a recent graduate and a fresher, I'm continuously expanding my skill set to include modern frontend technologies. Currently, I am learning React and Tailwind CSS to create dynamic, responsive user interfaces.
                With a strong foundation in web development and a growth mindset, I am excited to contribute to innovative projects while enhancing my full-stack development skills.            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4ca3d8] hover:border-[#4ca3d8]'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>

        </div>

    </div>
  )
}

export default Home