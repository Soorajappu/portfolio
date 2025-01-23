import React from 'react'
import PortfolioLarge from "../assets/works/portfoliolarge.png"
import BlogPreviewCard from "../assets/works/blogpreviewcard.png"
import SocialLinkProfile from "../assets/works/sociallinkprofile.png"
import TemplateDemo from "../assets/works/templatedemo.png"

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 pt-[96px] flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4ca3d8]'>Works</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <span>
                            
                        </span>
                        <div>
                            <div>
                                <a href="https://github.com/Soorajappu/portfolio">
                                    <img src={PortfolioLarge} alt="" />
                                    <div className='text-center flex justify-around pb-2 mt-2'>
                                        <a href="https://github.com/Soorajappu/portfolio">
                                            <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View github repository</button>
                                        </a>
                                        <a href="https://soorajappu.github.io/portfolio/">
                                            <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View Page</button>
                                        </a>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <a href="https://github.com/Soorajappu/Blog-preview-card">
                            <img src={BlogPreviewCard} alt="" />
                            <div className='text-center flex justify-around pb-2 mt-2'>
                                <a href="https://github.com/Soorajappu/Blog-preview-card">
                                    <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View github repository</button>
                                </a>
                                <a href="https://soorajappu.github.io/Blog-preview-card/">
                                    <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View Page</button>
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <a href="https://github.com/Soorajappu/social-links-profile">
                            <img src={SocialLinkProfile} alt="" />
                            <div className='text-center flex justify-around pb-2 mt-2'>
                                <a href="https://github.com/Soorajappu/social-links-profile">
                                    <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View github repository</button>
                                </a>
                                <a href="https://soorajappu.github.io/social-links-profile/">
                                    <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View Page</button>
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <a href="https://github.com/Soorajappu/TemplateDemo1">
                            <img src={TemplateDemo} alt="" />
                            <div className='text-center flex justify-around pb-2 mt-2'>
                                <a href="https://github.com/Soorajappu/TemplateDemo1">
                                    <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View github repository</button>
                                </a>
                                <a href="https://soorajappu.github.io/TemplateDemo1/">
                                    <button className='bg-blue-500 p-1 rounded hover:bg-blue-700'>View Page</button>
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work