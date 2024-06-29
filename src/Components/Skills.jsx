import React, { createRef, useEffect, useRef, useState } from 'react'
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TransitionGroup } from 'react-transition-group';

const Skills = () => {
  const [selectedOption, setSelectedOption] = useState('All')
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const skills = [
    {
    icon : (<span className="icon-[devicon--html5]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'HTML',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[vscode-icons--file-type-css]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'CSS',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[logos--javascript]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'JavaScript',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[logos--typescript-icon]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'TypeScript',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[devicon--react]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'ReactJS',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[tabler--brand-react-native]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'React Native',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[devicon--nextjs]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'NextJS',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[devicon--tailwindcss]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'Tailwind CSS',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[skill-icons--bootstrap]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'Bootstrap',
    category : 'FE',
    },
    {
    icon : (<span className="icon-[logos--nodejs-icon]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'Node JS',
    category : 'BE',
    },
    {
    icon : (<span className="icon-[skill-icons--expressjs-light]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'EXPRESS JS',
    category : 'BE',
    },
    {
    icon : (<span className="icon-[skill-icons--php-dark]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'PHP',
    category : 'BE',
    },
    {
    icon : (<span className="icon-[skill-icons--laravel-light]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'Laravel',
    category : 'BE',
    },
    {
    icon : (<span className="icon-[skill-icons--mongodb]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'MongoDB',
    category : 'DB',
    },
    {
    icon : (<span className="icon-[skill-icons--mysql-light]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'MySQL',
    category : 'DB',
    },
    {
    icon : (<span className="icon-[skill-icons--git]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'GIT',
    category : 'OTHERS',
    },
    {
    icon : (<span className="icon-[bi--github]"  style={{width: "4em", height: "4em"}}></span>),
    title : 'GitHub',
    category : 'OTHERS',
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


  return (
    <div id='skills' className='w-full h-full bg-themeBlue text-white p-10 flex flex-col gap-10'>
            <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl xl:text-4xl text-center font-bold underline underline-offset-[9px]'>My Skills</h1>

            {/* Navigation */}
            <nav className='w-fit flex  mx-auto justify-center gap-5 sm:gap-14'>
              <button className={` whitespace-nowrap text-xs md:text-base underline-transition ${selectedOption === 'All' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'}`} onClick={()=>handleFilter("All")}>All</button>
              <button className={` whitespace-nowrap text-xs md:text-base underline-transition ${selectedOption === 'FE' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `} onClick={()=>handleFilter("FE")}>Front End</button>
              <button className={` whitespace-nowrap text-xs md:text-base underline-transition ${selectedOption === 'BE' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `} onClick={()=>handleFilter("BE")}>Back End</button>
              <button className={` whitespace-nowrap text-xs md:text-base underline-transition ${selectedOption === 'DB' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `} onClick={()=>handleFilter("DB")}>Database</button>
              <button className={` whitespace-nowrap text-xs md:text-base underline-transition ${selectedOption === 'OTHERS' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `} onClick={()=>handleFilter("OTHERS")}>Others</button>
            </nav>

            {/* Lists */}
            <div ref={containerRef}  className='mx-auto grid justify-center justify-items-center grid-cols-2 semiSm:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-10 mt-3'>
            {skills.map((skill, index) => (
            (selectedOption === "All" || selectedOption === skill.category) && (
              <Zoom key={index} in={visible} timeout={500} style={{ transitionDelay: `${index * 20}ms` }}>
                <div className='transition-all skillBox rounded p-3 bg-themeBlue w-32 aspect-square justify-between flex flex-col items-center'>
                  {skill.icon}
                  <p className="text-white">{skill.title}</p>
                </div>
              </Zoom>
            )
            ))}
            </div>
            
    </div>
  )
}

export default Skills