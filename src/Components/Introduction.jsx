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
import { Link } from 'react-scroll';

const Introduction = () => {

    function sendEmail() {
        const email = 'trinidadpatrick019@gmail.com';
        const subject = 'Contacting You';
        const body = 'Hello, I would like to get in touch with you.';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    }

    const FloatingParticles = () => (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-emerald-400/30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      );

    

  return (
    <div id='home' className="overflow-hidden text-white  lg:px-20 xl:px-0">
      <FloatingParticles />

      {/* Social Links */}
      <div className="fixed z-30 flex-col hidden space-y-4 transform -translate-y-1/2 left-6 top-1/2 lg:flex">
        {[
          { Icon: Facebook, href: 'https://www.facebook.com/patrick.trinidad.5872/', color: 'hover:text-blue-400' },
          { Icon: Github, href: 'https://github.com/TrinidadPatrick', color: 'hover:text-gray-400' },
          { Icon: Linkedin, href: 'https://www.linkedin.com/in/john-patrick-trinidad-71a4b92ab/', color: 'hover:text-blue-500' },
        ].map(({ Icon, href, color }, index) => (
          <a
            key={index}
            href={href}
            className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl flex items-center justify-center text-slate-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 group`}
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
                  <p className="mb-4 text-lg font-medium text-center sm:text-start text-emerald-400 animate-bounce-subtle">
                    Hi, I'm John Patrick Trinidad
                  </p>
                  <h1 className="mb-6 text-4xl font-bold leading-tight text-center text-transparent sm:text-start lg:text-6xl bg-gradient-to-r from-white via-emerald-400 to-teal-400 bg-clip-text">
                    WEB DEVELOPER
                  </h1>
                  <p className="max-w-lg mb-8 text-xl leading-relaxed text-center sm:text-start text-slate-400">
                    Crafting digital experiences with clean code and creative design. 
                    Specialized in modern web technologies and user-centric solutions.
                  </p>
                </div>

                <div className="flex flex-col flex-wrap items-center justify-center w-full gap-4 sm:items-start sm:flex-row sm:justify-start">
                  <button onClick={()=>sendEmail()} className="group w-[11rem] bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-2">
                    <Mail size={20} />
                    <span className=' whitespace-nowrap'>Contact me</span>
                  </button>
                  
                  <button onClick={()=> window.location.href='/Trinidad_Patrick_Resume.pdf'} className="w-[11rem] group border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <Download size={20} />
                    <span className=' whitespace-nowrap'>Resume</span>
                  </button>
                </div>

                {/* Social Links */}
                <div className="z-30 flex justify-center w-full gap-4 sm:justify-start lg:hidden">
                {[
                  { Icon: Facebook, href: 'https://www.facebook.com/patrick.trinidad.5872/', color: 'hover:text-blue-400' },
                  { Icon: Github, href: 'https://github.com/TrinidadPatrick', color: 'hover:text-gray-400' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/john-patrick-trinidad-71a4b92ab/', color: 'hover:text-blue-500' },
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl flex items-center justify-center text-slate-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 group`}
                  >
                    <Icon size={20} className="transition-transform duration-200 group-hover:scale-110" />
                  </a>
                ))}
                </div>

                <div className='border-t border-slate-700/50 sm:hidden'/>

                {/* Skills Preview */}
                <div className="flex flex-wrap justify-center gap-3 sm:justify-start lg:pt-8">
                  {['WordPress', 'React', 'TypeScript', 'Node.js', 'MongoDB'].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm transition-all duration-300 border rounded-full bg-slate-800/50 backdrop-blur-sm border-emerald-500/20 text-emerald-300 hover:bg-slate-700/50 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block animate-fade-in-right">
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Main Circle */}
                  <div className="w-[23rem] h-[23rem] mx-auto relative">
                    <div className="absolute inset-0 border rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent backdrop-blur-sm border-emerald-500/20 animate-pulse"></div>
                    
                    {/* Inner Developer Illustration */}
                    <div className="absolute flex items-center justify-center border rounded-full inset-8 bg-gradient-to-br from-slate-800 to-slate-900 border-emerald-500/30">
                      <div className="relative w-48 h-32 overflow-hidden rounded-lg bg-slate-700">
                        {/* Monitor */}
                        <div className="absolute rounded top-2 left-2 right-2 bottom-2 bg-slate-900">
                          {/* Window controls */}
                          <div className="flex p-2 space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          </div>
                          {/* Code lines */}
                          <div className="p-2 space-y-1">
                            <div className="w-3/4 h-1 rounded bg-emerald-400 animate-pulse"></div>
                            <div className="w-1/2 h-1 rounded bg-slate-500"></div>
                            <div className="w-2/3 h-1 rounded bg-slate-500"></div>
                            <div className="w-1/3 h-1 delay-75 rounded bg-emerald-400 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  {[
                    { Icon: Code2, position: 'top-4 right-8', delay: '0s' },
                    { Icon: Palette, position: 'bottom-8 left-4', delay: '1s' },
                    { Icon: Zap, position: 'top-1/2 right-0', delay: '2s' },
                  ].map(({ Icon, position, delay }, index) => (
                    <div
                      key={index}
                      className={`absolute ${position} w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 animate-float`}
                      style={{ animationDelay: delay }}
                    >
                      <Icon size={24} />
                    </div>
                  ))}
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