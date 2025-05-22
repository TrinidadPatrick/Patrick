import React, { useEffect, useState } from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';
import Profile from '../Utilities/Images/Trinidad_Profile.jpeg'
import side_image_2 from '../Utilities/Images/side_image2.png'
import side_image_3 from '../Utilities/Images/side_image3.png'
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
        <div className='w-full lg:w-[35vw] flex flex-col gap-3 sm:gap-5 flex-none justify-center h-full'>
            <h4 className='text-sm text-center sm:text-start sm:text-lg  font-medium text-themeGreen'>Hi, <TypeAnimation speed={50} repeat={Infinity} sequence={["I'm John Patrick Trinidad", 5000, "", 500]} /></h4>
            <span className='text-white text-center sm:text-start whitespace-nowrap w-full text-[2.5rem] sm:text-4xl xl:text-5xl  font-bold '>WEB DEVELOPER</span>
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
        <div className='w-full h-full flex flex-col justify-center items-center gap-3 py-20 px-5 xl:px-20  '>
        {/* <span className='text-white hidden lg:block text-start  w-full text-[2rem] sm:text-2xl  font-bold '>Featured Projects</span>
        <div className='hidden  lg:grid flex-1 h-full justify-center items-center relative grid-cols-2 gap-10'>
            <div className='bg-red-100 serviceBoxShadow h-full w-full rounded overflow-hidden flex shadow-lg ' >
                <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dnbgrdgpn/image/upload/v1727500875/Minimalist_Website_Launch_Computer_Mockup_Instagram_Post_1000_x_750_px_1_lg1ngl.png' />
            </div>
            <div className='bg-red-100 h-full rounded overflow-hidden' >
                <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dnbgrdgpn/image/upload/v1745302069/Screenshot_2025-04-22_133759_edj8pl.png' />
            </div>
            <div className=' h-full rounded overflow-hidden col-span-2 flex justify-center' >
                <div className='w-1/2 bg-red-100 rounded'>
                    <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dnbgrdgpn/image/upload/v1747472979/Beige_Soft_Mockup_Launching_New_Website_Facebook_Post_2_gkhqsi.png' />
                </div>
            </div>   */}
            <div className='flex-1 h-full max-h-[700px] flex absolute justify-center'>
                <img src={Blob1} />
            </div>
            <div className='flex-1 h-full flex max-h-[700px] justify-center absolute brightness-95 '>
                <img src={Blob2}  />
            </div>
            <div className=' w-[300px] xl:w-[500px] max-h-[700px]  rounded-full aspect-square overflow-hidden z-20'>
                <img src={side_image_2} alt='profile' />
            </div>
        {/* </div> */}
        </div>
    </div>
    </main>
  )
}

export default Introduction