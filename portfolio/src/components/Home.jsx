import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#4ca3d8]'>Hi, my name is</p>
            <h1 className='text-4xl sm:-7xl font-bold text-[#ccd6f6]'>Sooraj KG</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm a Python Django Developer. I'm a fresher also and I currently studying React and Tailwind CSS for Frontend on my own using YouTube videos.
            </p>
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