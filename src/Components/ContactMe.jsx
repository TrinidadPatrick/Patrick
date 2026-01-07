import React from 'react'
import contactMeImg from '../Utilities/Images/ContactMeImg.svg'
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const ContactMe = () => {
    const year = new Date().getFullYear()

    function sendEmail() {
      const email = 'trinidadpatrick019@gmail.com';
      const subject = 'Contacting You';
      const body = 'Hello, I would like to get in touch with you.';
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
  }

  return (
    <div id='contactme' className='flex flex-col w-full h-full pt-20'>
        <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl font-bold text-center text-white xl:text-4xl'>Contact me</h1>
        <div className="w-24 h-1 mx-auto mt-5 bg-white rounded-full"></div>

        <div className='flex w-full h-full gap-5 mt-10'>
            <div className='items-center justify-center flex-1 hidden sm:flex'>
                <img className='w-[60%] xl:w-[40%] aspect-square' src={contactMeImg} alt="contact me" />
            </div>
            <div className='flex flex-col justify-center flex-1 gap-10 px-10 sm:px-0 '>
                {/* Home */}
                <div className='flex items-center gap-3'>
                    <FaHome color='white' size={20} />
                    <p className='font-light text-white'>Tanauan City, Batangas, Philippines</p>
                </div>
                {/* Email */}
                <div className='flex items-center gap-3'>
                    <FaEnvelope color='white' size={20} />
                    <p className='font-light text-white'>TrinidadPatrick019@gmail.com</p>
                </div>
                {/* Phone */}
                <div className='flex items-center gap-3'>
                    <FaPhone color='white' size={20} />
                    <p className='font-light text-white'>0967 314 3709</p>
                </div>
                {/* Message Button */}
                <div className='flex items-center gap-2 px-3 py-2 text-white border rounded-full w-fit'>
                <button onClick={()=>sendEmail()}><p className='pt-0.5'>Let's Talk</p></button>
                <IoIosArrowRoundForward size={20} />
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="py-6 mt-10 text-white ">
      <div className="container mx-auto text-center">
        <p>© All rights reserved. Patrick - {year}</p>
        <div className="flex justify-center mt-4 space-x-4">
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