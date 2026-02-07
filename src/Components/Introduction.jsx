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
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink, Code2, Palette, Zap } from 'lucide-react';
import developer from '../Utilities/Images/developer.svg'
import DeveloperIllustration from './Reusable/DeveloperIllustration';

const Introduction = () => {
  const resumeURL = `https://zzmrjhftlghyxczgaqri.supabase.co/storage/v1/object/public/resume/Trinidad_Patrick_Resume.pdf?t=${new Date().getTime()}`
  function sendEmail() {
    const email = 'trinidadpatrick019@gmail.com';
    const subject = 'Contacting You';
    const body = 'Hello, I would like to get in touch with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }



  return (
    <div id='home' className="overflow-hidden text-white lg:px-20 xl:px-0 h-dvh flex flex-col justify-center">

      {/* Social Links desktop */}
      <div className="fixed z-30 flex-col hidden space-y-4 transform -translate-y-1/2 left-6 top-1/2 lg:flex">
        {[
          { Icon: Facebook, href: 'https://www.facebook.com/patrick.trinidad.5872/', color: 'hover:text-blue-400' },
          { Icon: Github, href: 'https://github.com/TrinidadPatrick', color: 'hover:text-gray-400' },
          { Icon: Linkedin, href: 'https://www.linkedin.com/in/john-patrick-trinidad-71a4b92ab/', color: 'hover:text-blue-500' },
        ].map(({ Icon, href, color }, index) => (
          <a
            key={index}
            href={href}
            className={`w-12 h-12  backdrop-blur-sm border border-white rounded-xl flex items-center justify-center text-white ${color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 group`}
          >
            <Icon size={20} className="transition-transform duration-200 group-hover:scale-110" />
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <main className="relative pt-16 ">
        <section className="flex items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="w-full mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Left Content */}
              <div className="space-y-8 animate-fade-in-left">
                <div>
                  <p className="mb-4 text-lg font-medium text-center text-themeSecondary sm:text-start animate-bounce-subtle">
                    John Patrick Trinidad
                  </p>
                  <h1 className="mb-6 text-4xl font-bold leading-tight text-center text-transparent text-white sm:text-start lg:text-7xl bg-gradient-to-r bg-clip-text">
                    FULL STACK DEVELOPER
                  </h1>
                  <p className="max-w-lg mb-8 text-lg text-center text-gray-400 sm:text-start">
                    I create web experiences with clean code and creative design, focusing on modern tools and making things easy and enjoyable for users.
                  </p>
                </div>

                <div className="flex flex-col flex-wrap items-center justify-center w-full gap-4 sm:items-start sm:flex-row sm:justify-start">
                  <button onClick={() => sendEmail()} className="hover:scale-105 border-2 border-themeSecondary group w-[11rem] text-themeWhite bg-themeSecondary px-4 sm:px-8 py-2 sm:py-3 rounded font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                    <Mail size={20} />
                    <span className='whitespace-nowrap'>Contact me</span>
                  </button>

                  <button onClick={() => window.open(resumeURL, '_blank')} className="w-[11rem] group border-2  px-4 sm:px-8 py-2 sm:py-3 rounded font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <Download size={20} />
                    <span className=' whitespace-nowrap'>Resume</span>
                  </button>
                </div>

                {/* Social Links mobile */}
                <div className="z-30 flex justify-center w-full gap-4 sm:justify-start lg:hidden">
                  {[
                    { Icon: Facebook, href: 'https://www.facebook.com/patrick.trinidad.5872/', color: 'hover:text-blue-400' },
                    { Icon: Github, href: 'https://github.com/TrinidadPatrick', color: 'hover:text-gray-400' },
                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/john-patrick-trinidad-71a4b92ab/', color: 'hover:text-blue-500' },
                  ].map(({ Icon, href, color }, index) => (
                    <a
                      key={index}
                      href={href}
                      className={`w-12 h-12 backdrop-blur-sm border border-white rounded-xl flex items-center justify-center text-white ${color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 group`}
                    >
                      <Icon size={20} className="transition-transform duration-200 group-hover:scale-110" />
                    </a>
                  ))}
                </div>

                <div className='border-t border-slate-700/50 sm:hidden' />

                {/* Skills Preview */}
                <div className="flex flex-wrap justify-center gap-3 sm:justify-start lg:pt-8">
                  {['WordPress', 'React', 'TypeScript', 'Node.js', 'MongoDB'].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm text-white transition-all duration-300 border rounded-full backdrop-blur-sm border-gray-100/20 hover:bg-slate-700/50 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block animate-fade-in-right">
                {/* <img src={developer} alt='developer' className='xl:scale-90' /> */}
                <div className="glow-effect"></div>
                <div className="illustration">
                  <DeveloperIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Introduction