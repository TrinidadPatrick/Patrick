import React, { useEffect, useState } from 'react'
import aboutMe from '../Utilities/Images/AboutMeImage.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    AOS.init({
        duration : 500,
        easing : "ease-in-out-cubic",
    })

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this value based on your needs
    };

    handleResize(); // Check the initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };


  },[])


  return (
    <div id='about' className='w-full max-w-[1920px] mx-auto flex lg:gap-10 justify-center items-center h-full py-20 bg-themeBlue text-white px-10 lg:px-20'>

      {/* Left Section */}
      <div data-aos={isMobile ? '' : 'zoom-in'} className='hidden md:flex w-72 h-72 semiMd:w-80 semiMd:h-80 lg:w-96 lg:h-96 xl:w-[35rem] xl:h-[35rem]  justify-center '>
        <img className='' src={aboutMe} alt="about me" />
      </div>

      <div data-aos={isMobile ? '' : 'zoom-in-left'} className='flex-1 md:ps-16 '>
        <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl xl:text-4xl font-bold underline underline-offset-[9px]'>About me</h1>
        <p className='text-xl md:text-sm lg:text-[1rem] xl:text-lg mt-5'>Hi, im John Patrick Trinidad,
        </p>

        <p className='mt-5 text-xl md:text-sm lg:text-[1rem] xl:text-lg'>
        I'm a web developer who loves solving problems with clean and efficient code. 
        I quickly pick up new technologies and enjoy working with teams to improve projects using modern frameworks. 
        My focus is on building user-friendly and high-performance applications that meet real-world needs. 
        I’m always looking to improve my skills through coding challenges and hands-on projects.


        </p>
      </div>

    </div>
  )
}

export default AboutMe