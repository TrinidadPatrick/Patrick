import React, { useState } from 'react'
import { Link } from 'react-scroll';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home')

  const handleSetActive = (to) => {
    setActiveLink(to);
  };


  return (
    <header className='fixed flex items-center w-full bg-themeBlue p-5'>
        <h1 className='text-white text-4xl inline-block font-bold'>J</h1>
        <h1 className='text-themeGreen text-4xl inline-block font-bold'>P</h1>

        <nav className='w-full h-full flex justify-end gap-10 pe-5'>
          <Link to="home" smooth={true} duration={500}>
                <button onClick={()=>handleSetActive('home')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'home' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Home</button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
          <button onClick={()=>handleSetActive('about')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'about' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>About me</button>
          </Link>
          <Link to="skills"  smooth={true} duration={500}>
          <button onClick={()=>handleSetActive('skills')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'skills' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Skills</button>
          </Link>
          <Link to="services" smooth={true} duration={500}>
          <button onClick={()=>handleSetActive('services')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'services' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Services</button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
          <button onClick={()=>handleSetActive('projects')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'projects' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Projects</button>
          </Link>
        </nav>
    </header>
  )
}

export default Header