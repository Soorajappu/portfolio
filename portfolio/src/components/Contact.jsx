import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full pb-20 bg-[#0a192f] pt-20 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/806dbe7b-bbbe-4529-8374-532f5ee9156f" className='flex flex-col mx-[500px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4ca3d8] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - soorajkg2002@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='message'></textarea>
            <button className='text-white border-2 hover:bg-[#4ca3d8] hover:border-[#4ca3d8] px-4 py-3 my-8 mx-auto flex items-center'>let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact