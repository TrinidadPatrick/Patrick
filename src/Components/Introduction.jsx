import React, { useEffect, useState } from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    // I'm John Patrick Trinidad

  return (
    <div className='w-full h-screen bg-themeBlue flex gap-10 items-center px-10 py-20'>
        {/* Links sections Facebook, Github, and LinkedIn */}
        <div className='w-7 gap-6  flex items-center flex-col py-10'>
            {/* Line 1 */}
            <div className='w-[2px] bg-white h-[150px]'></div>
            {/* Icons */}
            <div className='flex flex-col gap-5'>
                <BsFacebook className='text-white' size={25} />
                <BsGithub className='text-white' size={25} />
                <BsLinkedin className='text-white' size={23} />
            </div>
            {/* Line 2 */}
            <div className='w-[2px] bg-white h-[150px]'></div>
        </div>

        {/* Title, contact me and resume section */}
        <div className='flex flex-col gap-5'>
            <h4 className='font-medium text-themeGreen'>Hi, <TypeAnimation speed={50} repeat={Infinity} sequence={["I'm John Patrick Trinidad", 5000, "", 500]} /></h4>
            <h1 className='text-white text-5xl font-bold'>WEB DEVELOPER</h1>
        </div>
    </div>
  )
}

export default Introduction