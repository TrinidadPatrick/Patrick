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
      gradient: "from-blue-500 to-cyan-400",
      hoverGradient: "from-blue-400 to-cyan-300",
      features: ["Mobile-First Approach", "Cross-Browser Compatible", "Performance Optimized"]
    },
    {
      id: 2,
      icon: Globe,
      title: "Web Application",
      description: "Building dynamic, scalable web applications with cutting-edge technologies that deliver exceptional user experiences and robust functionality.",
      gradient: "from-purple-500 to-pink-400",
      hoverGradient: "from-purple-400 to-pink-300",
      features: ["Full-Stack Development", "API Integration", "Real-time Features"]
    },
    {
      id: 3,
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, user-centered designs that combine aesthetic excellence with functional usability to drive engagement and conversions.",
      gradient: "from-emerald-500 to-teal-400",
      hoverGradient: "from-emerald-400 to-teal-300",
      features: ["User Research", "Prototyping", "Design Systems"],
      highlighted: true
    },
    {
      id: 4,
      icon: Shield,
      title: "Security Solutions",
      description: "Implementing comprehensive security measures to protect your digital assets against modern threats and vulnerabilities across all platforms.",
      gradient: "from-orange-500 to-red-400",
      hoverGradient: "from-orange-400 to-red-300",
      features: ["Penetration Testing", "Security Audits", "Compliance"]
    }
  ];

  return (
    <section id='services' className="pt-24 lg:pt-0 px-6 relative overflow-hidden">
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300 font-medium">What I Offer</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-50 via-emerald-100 to-teal-200 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  service.highlighted 
                    ? 'ring-2 ring-emerald-400/50 shadow-2xl shadow-emerald-500/20' 
                    : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isHovered ? service.hoverGradient : service.gradient
                } opacity-10 transition-all duration-500`}></div>
                
                {/* Glass Effect Background */}
                <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl"></div>
                
                {/* Highlight Effect */}
                {service.highlighted && (
                  <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                )}
                
                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-4 shadow-lg transform transition-transform duration-300 ${
                    isHovered ? 'scale-110 rotate-3' : ''
                  }`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  
                </div>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  isHovered 
                    ? `opacity-20 shadow-2xl shadow-${service.gradient.split('-')[1]}-500/50` 
                    : 'opacity-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button onClick={()=>sendEmail()} className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Let's Work Together
              <ChevronRight className="w-4 h-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services