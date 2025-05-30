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
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
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
    <main id='home' className=''>
  <div className="min-h-screen  text-white overflow-hidden">
      <FloatingParticles />


      {/* Social Links */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-4">
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
            <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <main className="relative pt-16">
        <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in-left">
                <div>
                  <p className="text-center sm:text-start text-emerald-400 text-lg font-medium mb-4 animate-bounce-subtle">
                    Hi, I'm John Patrick Trinidad
                  </p>
                  <h1 className="text-center sm:text-start text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                    WEB DEVELOPER
                  </h1>
                  <p className="text-xl text-center sm:text-start text-slate-400 leading-relaxed mb-8 max-w-lg">
                    Crafting digital experiences with clean code and creative design. 
                    Specialized in modern web technologies and user-centric solutions.
                  </p>
                </div>

                <div className="flex justify-center sm:justify-start flex-wrap gap-4">
                  <button onClick={()=>sendEmail()} className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center space-x-2">
                    <Mail size={20} />
                    <span>Contact me</span>
                    {/* <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" /> */}
                  </button>
                  
                  <button onClick={()=> window.location.href='/Trinidad_Patrick_Resume.pdf'} className="group border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                    <Download size={20} />
                    <span>Resume</span>
                  </button>
                </div>

                {/* Skills Preview */}
                <div className="flex justify-center sm:justify-start flex-wrap gap-3 pt-8">
                  {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full text-sm text-emerald-300 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-full backdrop-blur-sm border border-emerald-500/20 animate-pulse"></div>
                    
                    {/* Inner Developer Illustration */}
                    <div className="absolute inset-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <div className="w-48 h-32 bg-slate-700 rounded-lg relative overflow-hidden">
                        {/* Monitor */}
                        <div className="absolute top-2 left-2 right-2 bottom-2 bg-slate-900 rounded">
                          {/* Window controls */}
                          <div className="flex space-x-1 p-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          </div>
                          {/* Code lines */}
                          <div className="space-y-1 p-2">
                            <div className="h-1 bg-emerald-400 w-3/4 rounded animate-pulse"></div>
                            <div className="h-1 bg-slate-500 w-1/2 rounded"></div>
                            <div className="h-1 bg-slate-500 w-2/3 rounded"></div>
                            <div className="h-1 bg-emerald-400 w-1/3 rounded animate-pulse delay-75"></div>
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
    </main>
  )
}

export default Introduction