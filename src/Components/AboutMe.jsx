import React, { useEffect, useState } from 'react'
import aboutMe from '../Utilities/Images/AboutMeImage.svg'
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink, Code2, Palette, Zap } from 'lucide-react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    AOS.init({
        duration : 500,
        easing : "ease-in-out-cubic",
    })

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this value based on your needs
    };

    handleResize(); // Check the initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };


  },[])

  function sendEmail() {
    const email = 'trinidadpatrick019@gmail.com';
    const subject = 'Contacting You';
    const body = 'Hello, I would like to get in touch with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}


  return (
    <section id='about' className="min-h-screen text-white xl:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
          
          {/* Left - Enhanced Illustration */}
          <div data-aos="fade-in-left" className="relative hidden lg:hidden  animate-fade-in-left">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main circular container */}
              <div className="w-96 h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent rounded-full backdrop-blur-sm border border-emerald-500/20 animate-pulse"></div>
                
                {/* Developer workspace illustration */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative w-64 h-48">
                    {/* Desk/workspace */}
                    <div className="absolute bottom-0 w-full h-20 bg-gradient-to-r from-slate-700 to-slate-600 rounded-t-3xl shadow-2xl"></div>
                    
                    {/* Large Monitor */}
                    <div className="absolute bottom-16 left-8 w-32 h-20 bg-slate-800 rounded-lg border-2 border-slate-600 shadow-xl">
                      <div className="w-full h-full bg-slate-900 rounded-md m-0.5 relative overflow-hidden">
                        {/* Browser window */}
                        <div className="flex space-x-1 p-1 bg-slate-800">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                        {/* Code content */}
                        <div className="p-1 space-y-0.5">
                          <div className="h-0.5 bg-emerald-400 w-3/4 rounded animate-pulse"></div>
                          <div className="h-0.5 bg-blue-400 w-1/2 rounded animate-pulse delay-300"></div>
                          <div className="h-0.5 bg-slate-500 w-2/3 rounded"></div>
                          <div className="h-0.5 bg-purple-400 w-1/3 rounded animate-pulse delay-500"></div>
                          <div className="h-0.5 bg-slate-500 w-5/6 rounded"></div>
                          <div className="h-0.5 bg-cyan-400 w-1/4 rounded animate-pulse delay-700"></div>
                        </div>
                      </div>
                      {/* Monitor stand */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-slate-600 rounded-b-lg"></div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    
                    {/* Laptop */}
                    <div className="absolute bottom-12 right-4 w-20 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg transform rotate-12 shadow-lg">
                      <div className="w-full h-2/3 bg-slate-900 rounded-t-md m-0.5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20"></div>
                        <div className="absolute bottom-0 left-0.5 right-0.5 h-0.5 bg-emerald-400 animate-pulse"></div>
                        <div className="absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-blue-400/50"></div>
                      </div>
                    </div>
                    
                    {/* Developer figure */}
                    <div className="absolute bottom-12 left-16 w-8 h-12">
                      {/* Head */}
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-1 shadow-sm"></div>
                      {/* Body */}
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-t-lg mx-auto shadow-sm"></div>
                      {/* Arms */}
                      <div className="absolute top-6 left-0 w-2 h-4 bg-emerald-600 rounded-full transform -rotate-12"></div>
                      <div className="absolute top-6 right-0 w-2 h-4 bg-emerald-600 rounded-full transform rotate-12"></div>
                    </div>
                    
                    {/* Coffee cup */}
                    <div className="absolute bottom-16 right-12 w-3 h-4 bg-slate-700 rounded-b-full shadow-sm">
                      <div className="w-full h-2 bg-amber-700 rounded-b-full mt-1"></div>
                      <div className="absolute -right-1 top-1.5 w-1 h-1.5 border border-slate-600 rounded-full"></div>
                      {/* Steam */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-0.5 h-2 bg-slate-400/50 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Plant */}
                    <div className="absolute bottom-16 left-2 w-4 h-6">
                      <div className="w-3 h-2 bg-amber-800 rounded-full mx-auto"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-green-500 rounded-t-full"></div>
                      <div className="absolute top-1 left-0 w-1.5 h-2 bg-green-400 rounded-full transform -rotate-45"></div>
                      <div className="absolute top-1 right-0 w-1.5 h-2 bg-green-400 rounded-full transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech icons */}
              {[
                { text: 'React', position: 'top-8 right-4', delay: '0s', color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30' },
                { text: 'JS', position: 'bottom-16 left-0', delay: '1s', color: 'from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30' },
                { text: 'CSS', position: 'top-1/3 right-0', delay: '2s', color: 'from-blue-500/20 to-purple-500/20 text-blue-300 border-purple-500/30' },
                { text: 'Node', position: 'bottom-8 left-8', delay: '1.5s', color: 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30' },
                { text: 'TS', position: 'top-16 left-4', delay: '0.5s', color: 'from-blue-600/20 to-blue-500/20 text-blue-300 border-blue-500/30' },
              ].map(({ text, position, delay, color }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} px-3 py-2 bg-gradient-to-br ${color} backdrop-blur-sm border rounded-xl text-xs font-bold animate-float hover:scale-110 transition-transform duration-200`}
                  style={{ animationDelay: delay }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8  animate-fade-in-right">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                About me
              </h2>
              <p className="text-emerald-400 text-xl font-medium mb-6 animate-bounce-subtle">
                Hi, I'm John Patrick Trinidad,
              </p>
            </div>

            <div data-aos="fade-right" className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                I'm a <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-1 rounded-md">web developer</span> who loves solving problems with clean and efficient code. I quickly pick up new technologies and enjoy working with teams to improve projects using modern frameworks.
              </p>
              
              <p className="text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                My focus is on building <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-1 rounded-md">user-friendly and high-performance applications</span> that meet real-world needs. I'm always looking to improve my skills through coding challenges and hands-on projects.
              </p>
            </div>

            {/* Skills highlight */}
            <div data-aos="fade-right" className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-semibold text-emerald-400 flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mr-3"></span>
                What drives me:
              </h3>
              <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🚀', title: 'Performance', desc: 'Building fast, optimized applications', color: 'hover:border-red-500/50' },
                  { icon: '🎨', title: 'UI/UX', desc: 'Creating intuitive user experiences', color: 'hover:border-pink-500/50' },
                  { icon: '⚡', title: 'Modern Tech', desc: 'Staying current with latest frameworks', color: 'hover:border-yellow-500/50' },
                  { icon: '🔧', title: 'Problem Solving', desc: 'Finding elegant solutions to complex issues', color: 'hover:border-blue-500/50' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-3 p-4 bg-slate-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10 ${item.color} group`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-emerald-300 mb-1 group-hover:text-emerald-200 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <button onClick={()=>sendEmail()} className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 flex items-center space-x-2">
                <span>Let's work together</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        
      `}</style> */}
    </section>
  )
}

export default AboutMe