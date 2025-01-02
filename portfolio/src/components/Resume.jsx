import React from 'react'
import Sooraj from '../assets/sooraj.jpg'
import html2pdf from 'html2pdf.js'

function Resume() {

    // Function to trigger PDF download
  const downloadPDF = () => {
    const element = document.getElementById('resume-content'); // Get the div content
    html2pdf()
      .from(element) // Use the content of this div
      .save('Resume-SoorajKG.pdf'); // Name of the PDF
  }

  return (
    <>
        <div className='relative top-[80px] bottom-5 bg-[#cacaca] h-[150vh] z-[-1] font-sans '>
            <div className='w-[595px] h-[842px] bg-white m-auto relative top-7' id="resume-content">
                <div className='p-10'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-2xl font-bold'>SOORAJ K G</h1>
                            <p className='text-sm font-bold'>Web Developer</p>
                            <p className='text-sm'>Email: soorajkg2002@gmail.com</p>
                            <p className='text-sm'>Phone: +91 9496325766</p>
                        </div>
                        <img src={Sooraj} alt="" className='w-[120px] border-4 rounded-full' />
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl font-bold'>Summary</h1>
                        <p className='mt-2 text-justify'>
                            I am Software Developer with a diploma in Computer Engineering and
                            five months experience as a software developer (Trainee) from
                            Smartroot Solution Pvt Ltd. I have basic knowledge of <strong>Python Django</strong> , 
                            <strong>React JS</strong> , <strong>Git</strong> , <strong>Tailwind CSS</strong> , <strong>Bootstrap</strong> , <strong>HTML</strong> , <strong>CSS</strong> , <strong>JavaScript</strong> , and <strong>MySQL</strong>.
                            I have experience with are <strong>PowerBuilder Framework</strong> and <strong>SQL</strong> from the previous employment.
                            I would like to work in an environment, where I could give my best and gain more knowledge and
                            experience as a software developer.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl font-bold'>Skills</h1>
                        <div className='flex mt-3'>
                            <h4 className='font-bold'>Technologies :</h4> &nbsp;
                            <p>Git, MySQL, REST Api</p>
                        </div>
                        <div className='flex'>
                            <h4 className='font-bold'>Languages :</h4> &nbsp;
                            <p>Python, HTML5, CSS, JavaScript, SQL</p>
                        </div>
                        <div className='flex'>
                            <h4 className='font-bold'>Frameworks :</h4> &nbsp;
                            <p>React, Django, Bootstrap, Tailwind CSS</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        
                        <h2 className='font-bold'>Read and Write Stories Web Site</h2>
                        <p className='ml-8'>
                            It is a website to write and read stories. 
                            It is not completed.
                            I'm working on it.
                        </p>
                    
                        <div className='ml-14 text-sm'>
                            <div className='flex'>
                                <h4 className='font-bold'>Technologies Used : </h4> &nbsp;
                                <p>Git</p>
                            </div>
                            <div className='flex'>
                                <h4 className='font-bold'>Languages :</h4> &nbsp;
                                <p>Python, HTML5, CSS, JavaScript, MySQL</p>
                            </div>
                            <div className='flex'>
                                <h4 className='font-bold'>Frameworks :</h4> &nbsp;
                                <p>React, Django, Bootstrap, Tailwind CSS</p>
                            </div>
                            <div className='flex'>
                                <h4 className='font-bold'>Repository : </h4> &nbsp;    
                                <p>
                                    <a href="https://github.com/Soorajappu/Readwrite" >https://github.com/Soorajappu/Readwrite</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button to download PDF */}
            <div className='flex justify-center mt-10'>
                <button 
                  onClick={downloadPDF} 
                  className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">
                    Download PDF
                </button>
            </div>
        </div>
    </>
  )
}

export default Resume