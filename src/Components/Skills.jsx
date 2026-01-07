import React, { useEffect, useRef, useState } from 'react'
import { Code, Layers, Database, Settings, Star, Zap } from 'lucide-react';
import { Zoom } from '@mui/material';

const Skills = () => {
  const [selectedOption, setSelectedOption] = useState('All')
  const [visible, setVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);

  const categoryConfig = [
    { key: 'All', name: 'All', icon: Star },
    { key: 'FE', name: 'Front End', icon: Code },
    { key: 'BE', name: 'Back End', icon: Layers },
    { key: 'DB', name: 'Database', icon: Database },
    { key: 'OTHERS', name: 'Others', icon: Settings }
  ];

  const skills = [
    {
      icon : (<span className="icon-[devicon--react]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'ReactJS',
      category : 'FE',
      level: 92
      },
      {
      icon : (<span className="icon-[tabler--brand-react-native]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'React Native',
      category : 'FE',
      level: 80
    },
    {
      icon : (<span className="icon-[devicon--nextjs]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'NextJS',
      category : 'FE',
      level: 70
    },
    {
      icon : (<span className="icon-[skill-icons--wordpress]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'WordPress',
      category : 'FE',
      level: 55
    },
    {
      icon : (<span className="icon-[logos--javascript]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'JavaScript',
      category : 'FE',
      level: 88
      },
      {
      icon : (<span className="icon-[logos--python]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'Python',
      category : 'BE',
      level: 60
      },
      {
      icon : (<span className="icon-[logos--typescript-icon]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'TypeScript',
      category : 'FE',
      level: 75
      },
      {
      icon : (<span className="icon-[devicon--html5]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'HTML',
      category : 'FE',
      level: 95
      },
      {
      icon : (<span className="icon-[vscode-icons--file-type-css]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'CSS',
      category : 'FE',
      level: 90
      },
      {
      icon : (<span className="icon-[devicon--tailwindcss]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'Tailwind CSS',
      category : 'FE',
      level: 93
      },
      {
      icon : (<span className="icon-[skill-icons--bootstrap]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'Bootstrap',
      category : 'FE',
      level: 70
      },
      {
      icon : (<span className="icon-[logos--nodejs-icon]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'Node JS',
      category : 'BE',
      level: 88
      },
      {
      icon : (<span className="icon-[skill-icons--expressjs-light]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'EXPRESS JS',
      category : 'BE',
      level: 85
      },
      {
      icon : (<span className="icon-[skill-icons--prisma]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'PRISMA',
      category : 'BE',
      level: 65
      },
      {
      icon : (<span className="icon-[skill-icons--mongodb]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'MongoDB',
      category : 'DB',
      level: 85
      },
      {
      icon : (<span className="icon-[skill-icons--mysql-light]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'MySQL',
      category : 'DB',
      level: 88
      },
      {
      icon : (<span className="icon-[vscode-icons--file-type-plsql]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'PL/SQL',
      category : 'DB',
      level: 75
      },
      {
      icon : (<span className="icon-[skill-icons--git]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'GIT',
      category : 'OTHERS',
      level: 90
      },
      {
      icon : (<span className="icon-[bi--github]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'GitHub',
      category : 'OTHERS',
      level: 70
      },
  ]

  const handleFilter = (option) => {
    setSelectedOption(option)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const filteredSkills = skills.filter(skill => 
    selectedOption === 'All' || selectedOption === skill.category
  );

  return (
    <>
      <div id='skills' className='relative flex flex-col w-full gap-10 p-10 pt-24 mt-20 overflow-hidden text-white'>
        
        
        {/* Floating Elements */}
        <div className="absolute w-20 h-20 rounded-full top-32 right-20 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl animate-pulse"></div>
        <div className="absolute w-32 h-32 rounded-full bottom-32 left-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-themeDark backdrop-blur-sm border-white/10">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-gray-300">Technical Expertise</span>
            </div>
            
            <h1 className='mb-6 text-4xl font-bold text-center xl:text-6xl'>
              <span className="text-transparent text-white">
                My Skills
              </span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-white rounded-full"></div>
          </div>

          {/* Navigation */}
          <nav className='flex flex-wrap justify-center gap-4 mb-12'>
            {categoryConfig.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedOption === category.key;
              
              return (
                <button
                  key={category.key}
                  onClick={() => handleFilter(category.key)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'bg-gray-200 text-black'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-black' : 'text-gray-400'}`} />
                  <span className="mt-1 text-xs font-medium md:text-base whitespace-nowrap">{category.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Skill List */}
          <div ref={containerRef} className='mx-auto w-[90%] md:w-[80%] lg:w-[75%] xl:w-[50%]  grid justify-center justify-items-center grid-cols-2 semiSm:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 mt-3'>
            {filteredSkills.map((skill, index) => {
              const isHovered = hoveredSkill === skill.title;
              
              return (
                <Zoom key={`${skill.title}-${selectedOption}`} in={visible} timeout={500} style={{ transitionDelay: `${index * 50}ms` }}>
                  <div 
                    className='relative flex flex-col items-center justify-between w-32 p-6 skill-card skillBox rounded-2xl bg-themeBlue aspect-square group'
                    onMouseEnter={() => setHoveredSkill(skill.title)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Icon */}
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {skill.icon}
                    </div>
                    
                    {/* Skill Title */}
                    <p className="font-semibold text-center text-white transition-all duration-300 whitespace-nowrap group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text">
                      {skill.title}
                    </p>
                    
                    {/* Skill Level Progress Bar */}
                    <div className="absolute bottom-0 left-2 right-2">
                      <div className="w-full h-1 overflow-hidden transition-opacity duration-300 bg-gray-700 rounded-full opacity-0 group-hover:opacity-100">
                        <div 
                          className="h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                          style={{ 
                            width: isHovered ? `${skill.level}%` : '0%',
                            transitionDelay: isHovered ? `${index * 0.05}s` : '0s'
                          }}
                        ></div>
                      </div>
                      
                      {/* Percentage Display */}
                      <div className={`text-xs font-medium text-center mt-1 transition-all duration-300 ${
                        isHovered ? 'opacity-100 text-green-400' : 'opacity-0'
                      }`}>
                        {skill.level}%
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute transition-opacity duration-300 opacity-0 top-2 right-2 group-hover:opacity-100">
                      <span className="px-2 py-1 text-xs text-gray-300 rounded-full bg-black/50">
                        {categoryConfig.find(cat => cat.key === skill.category)?.name}
                      </span>
                    </div>
                  </div>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills