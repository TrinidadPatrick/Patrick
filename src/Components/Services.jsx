import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-full flex flex-col items-center gap-20 bg-themeBlue text-white py-10 '>
      <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl xl:text-4xl font-bold underline underline-offset-[9px]'>My Services</h1>

      {/* Service List */}
      <div className='grid grid-cols-4 gap-10 w-full px-20'>

        <div className='bg-themeBlueLight py-3 px-3 flex flex-col rounded aspect-square relative'>
          <div className=' w-24  aspect-square bg-themeGreen rounded absolute mx-auto -top-12 left-[34%] flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"/></svg>
          </div>
          <h2 className='text-center text-white text-2xl font-bold mt-14'>Responsive Web Design</h2>
          <p className='text-lg text-center font-[300] text-gray-300 mt-2'>Ensure that the web design is responsive and adjusts seamlessly to various screen sizes across different devices.</p>
        </div>

        <div className='bg-themeBlueLight py-3 px-6 flex flex-col rounded aspect-square relative'>
          <div className=' w-24  aspect-square bg-themeGreen rounded absolute mx-auto -top-12 left-[34%] flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 14 14"><path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"/></svg>
          </div>
          <h2 className='text-center text-white text-2xl font-bold mt-14'>Web Application</h2>
          <p className='text-lg text-center font-[300] text-gray-300 mt-2'>Develop a dynamic web applications that provide rich user experiences and advanced functionality. From single-page applications (SPAs) to full-stack development, I have the skills to bring your web app idea to life.</p>
        </div>
        <div className='bg-themeBlueLight py-3 px-6 flex flex-col rounded aspect-square relative'></div>
        <div className='bg-themeBlueLight py-3 px-6 flex flex-col rounded aspect-square relative'></div>
      </div>
    </div>
  )
}

export default Services