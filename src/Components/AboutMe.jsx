import React from 'react'
import aboutMe from '../Utilities/Images/AboutMeImage.svg'

const AboutMe = () => {
  return (
    <div className='w-full flex lg:gap-10 justify-center items-center h-full py-20 bg-themeBlue text-white px-10 lg:px-20'>

      {/* Left Section */}
      <div className='hidden md:flex w-72 h-72 semiMd:w-80 semiMd:h-80 lg:w-96 lg:h-96 xl:w-[35rem] xl:h-[35rem]  justify-center '>
        <img className='' src={aboutMe} alt="about me" />
      </div>

      <div className='flex-1 md:ps-16 '>
        <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl xl:text-4xl font-bold underline underline-offset-[9px]'>About me</h1>
        <p className='text-xl md:text-sm lg:text-[1rem] xl:text-lg mt-5'>Hi, im John Patrick Trinidad, a fresh graduate of <span className='text-themeGreen'>Bachelor of Science in Information Technology</span> from 
        <span className='text-themeGreen'> First Asia Institute of Technology and Humanities</span>.
        </p>

        <p className='mt-5 text-xl md:text-sm lg:text-[1rem] xl:text-lg'>
        As a passionate learner and aspiring web developer, 
        I am driven by a love for technology and a commitment to continuous learning. 
        I thrive in collaborative environments, bringing a problem-solving mindset and attention to detail to every project. 
        When I'm not coding, I enjoy exploring new technologies, and participating in coding challenges in Leetcode and Codewars.
        </p>
      </div>

    </div>
  )
}

export default AboutMe