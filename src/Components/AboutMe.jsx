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
    <section id='about' className="relative px-4 pt-24 overflow-hidden text-white xl:py-10 sm:px-6 lg:px-8">

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-1">

          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div data-aos="fade-right">
              <h2 className="mb-6 text-4xl font-bold text-transparent text-white lg:text-5xl bg-clip-text">
                About me
              </h2>
              <p className="mb-6 text-xl font-medium white animate-bounce-subtle">
                Hi, I'm John Patrick Trinidad,
              </p>
            </div>

            <div data-aos="fade-right" className="space-y-6 leading-relaxed text-slate-300">
              <p className="text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                I'm a <span className="px-2 py-1 font-semibold rounded-md text-emerald-400 bg-emerald-400/10">web developer</span> who loves solving problems with clean and efficient code. I quickly pick up new technologies and enjoy working with teams to improve projects using modern frameworks.
              </p>
              
              <p className="text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                My focus is on building <span className="px-2 py-1 font-semibold rounded-md text-emerald-400 bg-emerald-400/10">user-friendly and high-performance applications</span> that meet real-world needs. I'm always looking to improve my skills through coding challenges and hands-on projects.
              </p>
            </div>

            {/* Skills highlight */}
            <div data-aos="fade-right" className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <h3 className="flex items-center text-xl font-semibold ">
                <span className="w-8 h-0.5 bg-white text-white mr-3"></span>
                What drives me:
              </h3>
              <div data-aos="fade-right" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {title: 'Performance', desc: 'Building fast, optimized applications' },
                  {title: 'UI/UX', desc: 'Creating intuitive user experiences'},
                  {title: 'Modern Tech', desc: 'Staying current with latest frameworks'},
                  {title: 'Problem Solving', desc: 'Finding elegant solutions to complex issues'}
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-3 p-4 bg-slate-800/30 backdrop-blur-sm border border-gray-500 rounded-xl group`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div>
                      <h4 className="mb-1 font-semibold text-white transition-colors group-hover:text-gray-200">{item.title}</h4>
                      <p className="text-sm text-gray-300 transition-colors group-hover:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <button onClick={()=>sendEmail()} className="flex items-center px-8 py-4 space-x-2 font-semibold transition-all duration-300 bg-white rounded-full hover:bg-gray-200 group">
                <span className='text-black'>Let's work together</span>
                <ExternalLink size={16} className="text-black transition-all duration-200 group-hover:translate-x-1 group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutMe