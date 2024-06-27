import React, { useEffect, useState } from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';
import Profile from '../Utilities/Images/Trinidad_Profile.jpg'
import HomeBG from '../Utilities/Images/HomeBG.svg'
import Blob1 from '../Utilities/Images/Blob1.svg'
import Blob2 from '../Utilities/Images/Blob2.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll';

const Introduction = () => {

    function sendEmail() {
        const email = 'trinidadpatrick019@gmail.com';
        const subject = 'Contacting You';
        const body = 'Hello, I would like to get in touch with you.';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    }

  return (
    <main id='home' className=''>
    <div style={{ backgroundImage: `url(${HomeBG})`, backgroundRepeat : 'no-repeat', backgroundPosition : 'top', backgroundSize : 'cover'}} className='max-w-[1920px] mx-auto bg-black origin-top bg-center h-screen max-h-[1080px] flex gap-10 items-center px-10 py-20'>
        {/* Links sections Facebook, Github, and LinkedIn */}
        <div className='hidden sm:flex w-7 gap-6 items-center flex-col py-10'>
            {/* Line 1 */}
            <div className='w-[2px] bg-white h-[150px]'></div>
            {/* Icons */}
            <div className='flex flex-col gap-5'>
                <a href="https://www.facebook.com/patrick.trinidad.5872/" target="_blank" rel="noopener noreferrer" className="text-white">
                    <BsFacebook className='text-white' size={25} />
                </a>
                <a href="https://github.com/TrinidadPatrick" target="_blank" rel="noopener noreferrer" className="text-white">
                    <BsGithub className='text-white' size={25} />
                </a>
                <a href="https://www.linkedin.com/in/john-patrick-trinidad-71a4b92ab/" target="_blank" rel="noopener noreferrer" className="text-white">
                    <BsLinkedin className='text-white' size={23} />
                </a>
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
                    <button onClick={()=>sendEmail()} className='text-white hover:bg-themeGreenLight bg-themeGreen px-4 py-2 rounded'>Contact me</button>
                <a href="/src/Utilities/Resume/Trinidad_Patrick_Resume.pdf" download="Trinidad_Patrick_Resume.pdf" target='_blank' className='text-white hover:border-themeGreenLight cursor-pointer border border-white px-4 py-2 rounded'>Resume</a>
            </div>

            {/* Links */}
            <div className='sm:hidden justify-center mt-5 w-full flex items-center gap-5'>
            <a href="https://www.facebook.com/patrick.trinidad.5872/" target="_blank" rel="noopener noreferrer" className="text-white">
                    <BsFacebook className='text-white' size={25} />
                </a>
                <a href="https://github.com/TrinidadPatrick" target="_blank" rel="noopener noreferrer" className="text-white">
                    <BsGithub className='text-white' size={25} />
                </a>
                <a href="https://www.linkedin.com/in/john-patrick-trinidad-71a4b92ab/" target="_blank" rel="noopener noreferrer" className="text-white">
                    <BsLinkedin className='text-white' size={23} />
                </a>
            </div>
        </div>

        {/* My Image */}
        <div className='hidden lg:flex flex-1 h-full justify-center items-center relative'>
            <div className='flex-1 h-full max-h-[700px] flex absolute justify-center'>
                <img src={Blob1} />
            </div>
            <div className='flex-1 h-full flex max-h-[700px] justify-center absolute '>
                <img src={Blob2}  />
            </div>
            <div className=' w-[300px] xl:w-[370px] max-h-[700px] rounded-full aspect-square bg-white overflow-hidden shadow z-20'>
                <img src={Profile} alt='profile' />
            </div>
        </div>
    </div>
    </main>
  )
}

export default Introduction