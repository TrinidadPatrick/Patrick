import React, { useEffect, useRef, useState } from 'react'
import { Code, Layers, Database, Settings, Star, Zap } from 'lucide-react';
import { Zoom } from '@mui/material';

// Custom animations CSS
const customStyles = `
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(47, 209, 169, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(47, 209, 169, 0.6), 0 0 40px rgba(47, 209, 169, 0.2);
    }
  }

  @keyframes float-skill {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes skill-entrance {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

  .skill-card:hover {
    animation: float-skill 2s ease-in-out infinite;
  }

  .skill-entrance {
    animation: skill-entrance 0.6s ease-out both;
  }

  .glow-effect {
    animation: pulse-glow 3s ease-in-out infinite;
  }

  .underline-transition {
    position: relative;
    transition: all 0.3s ease;
  }

  .underline-transition::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 50%;
    background: linear-gradient(90deg, #2FD1A9, #10B981);
    transition: all 0.3s ease;
  }

  .underline-transition:hover::after,
  .underline-transition.active::after {
    width: 100%;
    left: 0;
  }

  .skillBox {
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
  }

  .skillBox:hover {
    transform: translateY(-8px) scale(1.05);
    border-color: rgba(47, 209, 169, 0.5);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(47, 209, 169, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }
`;

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
      icon : (<span className="icon-[skill-icons--laravel-light]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'Laravel',
      category : 'BE',
      level: 55
    },
    {
      icon : (<span className="icon-[logos--javascript]"  style={{width: "4em", height: "4em"}}></span>),
      title : 'JavaScript',
      category : 'FE',
      level: 88
      },
      {
        icon : (<span className="icon-[devicon--csharp]"  style={{width: "4em", height: "4em"}}></span>),
        title : 'C#',
        category : 'BE',
        level: 60
      },
      {
        icon : (<span className="icon-[skill-icons--php-dark]"  style={{width: "4em", height: "4em"}}></span>),
        title : 'PHP',
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
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div id='skills' className='w-full pt-24  text-white mt-20 p-10 flex flex-col gap-10 relative overflow-hidden'>
        
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300 font-medium">Technical Expertise</span>
            </div>
            
            <h1 className='text-4xl xl:text-6xl text-center font-bold mb-6'>
              <span className="bg-gradient-to-r from-emerald-50 via-emerald-100 to-teal-200 bg-clip-text text-transparent">
                My Skills
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"></div>
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
                      ? 'bg-gradient-to-r from-green-500 to-emerald-400 border-green-400 text-white shadow-lg glow-effect'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span className="font-medium text-xs md:text-base whitespace-nowrap">{category.name}</span>
                  {isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
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
                    className='skill-card skillBox rounded-2xl p-6 bg-themeBlue w-32 aspect-square justify-between flex flex-col items-center relative group'
                    onMouseEnter={() => setHoveredSkill(skill.title)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Icon */}
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {skill.icon}
                    </div>
                    
                    {/* Skill Title */}
                    <p className="text-white whitespace-nowrap font-semibold text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                      {skill.title}
                    </p>
                    
                    {/* Skill Level Progress Bar */}
                    <div className="absolute bottom-0 left-2 right-2">
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
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
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs px-2 py-1 bg-black/50 text-gray-300 rounded-full">
                        {categoryConfig.find(cat => cat.key === skill.category)?.name}
                      </span>
                    </div>
                  </div>
                </Zoom>
              );
            })}
          </div>

          {/* Statistics Section */}
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {skills.length}+
              </div>
              <div className="text-gray-300">Technologies</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                5+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                50+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Skills