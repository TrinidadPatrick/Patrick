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
    <div id='contactme' className='w-full h-full flex flex-col  pt-20'>
        <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl bg-gradient-to-r from-emerald-50 via-emerald-100 to-teal-200 bg-clip-text text-transparent xl:text-4xl text-center  font-bold'>Contact me</h1>
        <div className="w-24 mt-5 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"></div>

        <div className='w-full h-full flex gap-5 mt-10'>
            <div className='flex-1 hidden sm:flex justify-center items-center'>
                <img className='w-[60%] xl:w-[40%] aspect-square' src={contactMeImg} alt="contact me" />
            </div>
            <div className='flex-1 flex flex-col px-10 sm:px-0 justify-center gap-10 '>
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
                    <p className='text-white font-light'>0967 314 3709</p>
                </div>
                {/* Message Button */}
                <div className='text-white flex px-3 py-2 bg-themeGreenLight w-fit items-center rounded-full gap-2'>
                <button onClick={()=>sendEmail()}><p className='pt-0.5'>Let's Talk</p></button>
                <IoIosArrowRoundForward size={20} />
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className=" text-white py-6 mt-10">
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