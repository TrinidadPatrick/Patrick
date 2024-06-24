import React, { useEffect } from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css';
import WindowSizeProvider from './WindowSizeProvider';

const Services = () => {
  const {size} = WindowSizeProvider()

  useEffect(()=>{
    AOS.init({
        duration : 400,
        easing : "ease-in-out-cubic"
    })
  },[])

  return (
    <div className='w-full h-full flex flex-col items-center gap-20 bg-themeBlue text-white pt-10 pb-24 '>
      <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl xl:text-4xl font-bold underline underline-offset-[9px]'>My Services</h1>

      {/* Service List */}
      <div data-aos={size.width <= 768 ? '' : 'zoom-out'}  className='flex flex-wrap mt-10 gap-16 justify-center semiMd:grid semiSm:grid-cols-2 semiMd:grid-cols-4 semiMd:gap-5 xl:gap-10 w-full px-10 xl:px-20'>

        <div className='bg-themeBlueLight w-[300px] h-[250px] xl:h-[300px] semiMd:w-full serviceBoxShadow py-3 px-3 lg:px-4 flex flex-col rounded semiMd:aspect-square relative'>
          <div className=' w-[4.5rem] lg:w-20 xl:w-24  aspect-square bg-themeGreen rounded absolute mx-auto -top-10 lg:-top-12 left-[50%] -translate-x-[50%] flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width={`${size.width <= 1023 ? '2.5rem' : '3rem'}`} height={`${size.width <= 1023 ? '2.5rem' : '3rem'}`} viewBox="0 0 24 24"><path fill="#FFFFFF" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"/></svg>
          </div>
          <h2 className='text-center text-white text-xl semiMd:text-lg xl:text-2xl font-bold mt-10 semiMd:mt-9 lg:mt-7 xl:mt-14'>Responsive Web Design</h2>
          <p className='text-base semiMd:text-sm lg:text-sm xl:text-lg leading-5 semiMd:leading-4 xl:leading-6 text-center font-[300] text-gray-300 mt-2 xl:mt-2'>Ensure that the web design is responsive and adjusts seamlessly to various screen sizes across different devices.</p>
        </div>

        <div className='bg-themeBlueLight w-[300px] h-[250px] xl:h-[300px] semiMd:w-full serviceBoxShadow py-3 px-3 lg:px-4 flex flex-col rounded semiMd:aspect-square relative'>
          <div className=' w-[4.5rem] lg:w-20 xl:w-24  aspect-square bg-themeGreen rounded absolute mx-auto -top-10 lg:-top-12 left-[50%] -translate-x-[50%] flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width={`${size.width <= 1023 ? '2rem' : '3rem'}`} height={`${size.width <= 1023 ? '2rem' : '3rem'}`} viewBox="0 0 14 14"><path fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"/></svg>
          </div>
          <h2 className='text-center text-white text-xl semiMd:text-lg xl:text-2xl font-bold mt-10 semiMd:mt-9 lg:mt-7 xl:mt-14'>Web Application</h2>
          <p className='text-base semiMd:text-sm lg:text-sm xl:text-lg leading-5 semiMd:leading-4 xl:leading-6 text-center font-[300] text-gray-300 mt-2 xl:mt-2'>Develop a dynamic web applications that provide rich user experiences and advanced functionality. From single-page applications to full-stack development, I have the skills to bring your web app idea to life.</p>
        </div>

        <div className='bg-themeBlueLight w-[300px] h-[250px] xl:h-[300px] semiMd:w-full serviceBoxShadow py-3 px-3 lg:px-4 flex flex-col rounded semiMd:aspect-square relative'>
          <div className=' w-[4.5rem] lg:w-20 xl:w-24  aspect-square bg-themeGreen rounded absolute mx-auto -top-10 lg:-top-12 left-[50%] -translate-x-[50%] flex items-center justify-center'>
            <MdOutlineDesignServices size={size.width <= 1023 ? 40 : 50} />
          </div>
          <h2 className='text-center text-white text-xl semiMd:text-lg xl:text-2xl font-bold mt-10 semiMd:mt-9 lg:mt-7 xl:mt-14'>UI/UX Design</h2>
          <p className='text-base semiMd:text-sm lg:text-sm xl:text-base leading-5 semiMd:leading-4 xl:leading-6 text-center font-[300] text-gray-300 mt-2 xl:mt-2'>I provide UI/UX design services to create intuitive and engaging user interfaces. My focus is on delivering exceptional user experiences, ensuring your web application is both visually appealing and easy to use.</p>
        </div>

        <div className='bg-themeBlueLight w-[300px] h-[250px] xl:h-[300px] semiMd:w-full serviceBoxShadow py-3 px-3 lg:px-4 flex flex-col rounded semiMd:aspect-square relative'>
          <div className=' w-[4.5rem] lg:w-20 xl:w-24  aspect-square bg-themeGreen rounded absolute mx-auto -top-10 lg:-top-12 left-[50%] -translate-x-[50%] flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width={`${size.width <= 1023 ? '2rem' : '3rem'}`} height={`${size.width <= 1023 ? '2rem' : '3rem'}`} viewBox="0 0 32 32"><path fill="#FFFFFF" d="M11 11v6.468a5.02 5.02 0 0 0 2.861 4.52L16 23l2.139-1.013A5.02 5.02 0 0 0 21 17.467V11Zm8 6.468a3.01 3.01 0 0 1-1.717 2.71L16 20.787l-1.283-.607A3.01 3.01 0 0 1 13 17.468V13h6Z"/><path fill="#FFFFFF" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"/></svg>
          </div>
          <h2 className='text-center text-white text-xl semiMd:text-lg xl:text-2xl font-bold mt-10 semiMd:mt-9 lg:mt-7 xl:mt-14'>Security</h2>
          <p className='text-base semiMd:text-sm lg:text-sm xl:text-base leading-5 semiMd:leading-4 xl:leading-6 text-center font-[300] text-gray-300 mt-2 xl:mt-2'>I ensure that the website's security measures are robust, protecting against threats and vulnerabilities across all devices and platforms.</p>
        </div>
      </div>
    </div>
  )
}

export default Services