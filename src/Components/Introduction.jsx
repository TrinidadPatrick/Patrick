import React, { useEffect, useState } from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';
import Profile from '../Utilities/Images/Trinidad_Profile.jpg'
import HomeBG from '../Utilities/Images/HomeBG.svg'
import Blob1 from '../Utilities/Images/Blob1.svg'
import Blob2 from '../Utilities/Images/Blob2.svg'
import { RxHamburgerMenu } from "react-icons/rx";

const Introduction = () => {


  return (
    <div style={{ backgroundImage: `url(${HomeBG})`}} className='w-full h-screen   flex gap-10 items-center px-10 py-20'>
        {/* Links sections Facebook, Github, and LinkedIn */}
        <div className='hidden sm:flex w-7 gap-6 items-center flex-col py-10'>
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
        <div className='w-full sm:w-fit flex flex-col gap-3 sm:gap-7 flex-none justify-center h-full'>
            <h4 className='text-sm text-center sm:text-left sm:text-lg font-medium text-themeGreen'>Hi, <TypeAnimation speed={50} repeat={Infinity} sequence={["I'm John Patrick Trinidad", 5000, "", 500]} /></h4>
            <span className='text-white text-center  w-full text-[2.5rem] sm:text-5xl  font-bold '>WEB DEVELOPER</span>
            {/* Buttons */}
            <div className='w-full flex flex-wrap justify-center sm:justify-start gap-4'>
                <button className='text-white hover:bg-themeGreenLight bg-themeGreen px-4 py-2 rounded'>Contact me</button>
                <button className='text-white hover:border-themeGreenLight border border-white px-4 py-2 rounded'>Resume</button>
            </div>

            {/* Links */}
            <div className='sm:hidden justify-center mt-5 w-full flex items-center gap-5'>
                <button><BsFacebook className='text-white' size={25} /></button>
                <button><BsGithub className='text-white' size={25} /></button>
                <button><BsLinkedin className='text-white' size={25} /></button>
            </div>
        </div>

        {/* My Image */}
        <div className='hidden lg:flex flex-1 h-full justify-center items-center relative'>
            <div className='flex-1 h-full flex absolute justify-center'>
                <img src={Blob1} />
            </div>
            <div className='flex-1 h-full flex justify-center absolute '>
                <img src={Blob2}  />
            </div>
            <div className=' w-[300px] xl:w-[350px] rounded-full aspect-square bg-white overflow-hidden shadow z-20'>
                <img src={Profile} alt='profile' />
            </div>
        </div>
    </div>
  )
}

export default Introduction