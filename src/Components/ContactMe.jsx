import React from 'react'
import contactMeImg from '../Utilities/Images/ContactMeImg.svg'
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const ContactMe = () => {
    const year = new Date().getFullYear()
  return (
    <div className='w-full h-full flex flex-col bg-themeBlue pt-10'>
        <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl text-white xl:text-4xl text-center  font-bold underline underline-offset-[9px]'>Contact me</h1>

        <div className='w-full h-full flex gap-5 mt-10'>
            <div className='flex-1  flex justify-center items-center'>
                <img className='w-[40%] aspect-square' src={contactMeImg} alt="contact me" />
            </div>
            <div className='flex-1 flex flex-col justify-center gap-10 '>
                {/* Home */}
                <div className='flex items-center gap-3'>
                    <FaHome color='white' size={20} />
                    <p className='text-white font-light'>Tanauan City, Batangas, Philippines</p>
                </div>
                {/* Email */}
                <div className='flex items-center gap-3'>
                    <FaEnvelope color='white' size={20} />
                    <p className='text-white font-light'>TrinidadPatrick019@gmail.com</p>
                </div>
                {/* Phone */}
                <div className='flex items-center gap-3'>
                    <FaPhone color='white' size={20} />
                    <p className='text-white font-light'>0991 413 8519</p>
                </div>
                {/* Message Button */}
                <button className='text-white flex px-3 py-2 bg-themeGreenLight w-fit items-center rounded-full gap-2'>
                <p className='pt-0.5'>Let's Talk</p>
                <IoIosArrowRoundForward size={20} />
                </button>
            </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© All rights reserved. Patrick - {year}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/TrinidadPatrick" target="_blank" rel="noopener noreferrer" className="text-white">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/john-patrick-trinidad-71a4b92ab/" target="_blank" rel="noopener noreferrer" className="text-white">
          <BsLinkedin />
          </a>
          <a href="https://www.facebook.com/patrick.trinidad.5872/" target="_blank" rel="noopener noreferrer" className="text-white">
          <BsFacebook />
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default ContactMe