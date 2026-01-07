import React, { useEffect, useState } from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css';
import WindowSizeProvider from './WindowSizeProvider';
import { Monitor, Globe, Palette, Shield, ChevronRight, Sparkles } from 'lucide-react';

const Services = () => {
  const {size} = WindowSizeProvider()
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(()=>{
    AOS.init({
        duration : 400,
        easing : "ease-in-out-cubic"
    })
  },[])

  function sendEmail() {
    const email = 'trinidadpatrick019@gmail.com';
    const subject = 'Contacting You';
    const body = 'Hello, I would like to get in touch with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

  const services = [
    {
      id: 1,
      icon: Monitor,
      title: "Responsive Web Design",
      description: "Crafting pixel-perfect, responsive websites that adapt seamlessly across all devices and screen sizes, ensuring your brand looks stunning everywhere.",
      features: ["Mobile-First Approach", "Cross-Browser Compatible", "Performance Optimized"]
    },
    {
      id: 2,
      icon: Globe,
      title: "Web Application",
      description: "Building dynamic, scalable web applications with cutting-edge technologies that deliver exceptional user experiences and robust functionality.",
      features: ["Full-Stack Development", "API Integration", "Real-time Features"]
    },
    {
      id: 3,
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, user-centered designs that combine aesthetic excellence with functional usability to drive engagement and conversions.",
      features: ["User Research", "Prototyping", "Design Systems"],
      highlighted: true
    },
    {
      id: 4,
      icon: Shield,
      title: "Security Solutions",
      description: "Implementing comprehensive security measures to protect your digital assets against modern threats and vulnerabilities across all platforms.",
      features: ["Penetration Testing", "Security Audits", "Compliance"]
    }
  ];

  return (
    <section id='services' className="relative px-6 pt-24 overflow-hidden lg:pt-0">
      
      {/* Floating Elements */}
      <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl animate-pulse"></div>
      <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-20 right-20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-xl animate-pulse"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/5 backdrop-blur-sm border-white/10">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-gray-300">What I Offer</span>
          </div>
          
          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="text-white">
              My Services
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-white rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div data-aos="fade-right" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >

                <div className={`absolute inset-0 bg-slate-800/40 opacity-10 transition-all duration-500`}></div>
                
                <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl"></div>
                
                {/* Highlight Effect */}
                {service.highlighted && (
                  <div className="absolute h-px -top-px -left-px -right-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                )}
                
                {/* Card Content */}
                <div className="relative flex flex-col h-full p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br p-4 shadow-lg transform transition-transform duration-300 ${
                    isHovered ? 'scale-110 rotate-3' : ''
                  }`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="flex-grow mb-6 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gray-500`}></div>
                        <span className='mt-1'>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  
                </div>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  isHovered 
                    ? `opacity-20 shadow-2xl` 
                    : 'opacity-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button onClick={()=>sendEmail()} className="px-8 py-4 font-medium text-black transition-all duration-300 transform bg-white rounded-full group hover:scale-105">
            <span className="flex items-center gap-2">
              Let's Work Together
              <ChevronRight className="w-4 h-4 transition-transform group-hover:transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services