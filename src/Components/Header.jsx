import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [activeLink, setActiveLink] = useState('home')
  const [showSideBar, setShowSideBar] = useState(false)

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
        setNavbarBg(true); // Apply background color
    } else {
        setNavbarBg(false); // Remove background color
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []); // Empty dependency array means this effect runs only once


  return (
    <header className={`fixed max-w-[1920px] z-50 flex items-center w-full ${navbarBg ? 'bg-transparent bg-opacity-80 backdrop-blur-lg' : ''} p-0`}>
      {/* Backdrop */}
      {
        showSideBar &&
        <div onClick={()=>setShowSideBar(false)} style={{backgroundColor : 'rgba(0,0,0,0.6)'}} className='w-full cursor-pointer h-screen backdrop-blur-sm top-0 absolute bg-white z-20'>

      </div>
      }
      
      <div className='flex ps-5 py-5'>
        <h1 className='text-white text-4xl inline-block font-bold'>J</h1>
        <h1 className='text-themeGreen text-4xl inline-block font-bold'>P</h1>
      </div>

        {/* Desktop Links */}
        <nav className='hidden md:flex w-full h-full justify-end gap-10 pe-5'>
          <Link to="home" smooth={true} duration={500}>
                <button onClick={()=>handleSetActive('home')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'home' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Home</button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
          <button onClick={()=>handleSetActive('about')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'about' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>About me</button>
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-100}>
          <button onClick={()=>handleSetActive('services')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'services' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Services</button>
          </Link>
          <Link to="skills"  smooth={true} duration={500} offset={-100}>
          <button onClick={()=>handleSetActive('skills')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'skills' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Skills</button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
          <button onClick={()=>handleSetActive('projects')} style={{textDecorationColor : '#2FD1A9'}} className={`underline-transition ${activeLink === 'projects' ? ' text-themeGreen active underline-offset-4' : 'text-white hover:text-themeGreen'} `}>Projects</button>
          </Link>
        </nav>

        {/* Hamburger Button */}
        <nav className='w-full pe-5 mb-3 h-full flex md:hidden items-center justify-end'>
          <button onClick={()=>setShowSideBar(true)}>
            <RxHamburgerMenu color='white' size={25} />
          </button>
        </nav>
        
        {/* Mobile sidebar */}
        <aside className={`${showSideBar ? 'translate-x-[0%]' : 'translate-x-[100%]'} md:hidden transition-all ease-in w-screen extraSm:w-[300px] z-30 bg-themeBlue flex flex-col gap-20 justify-center items-center h-screen top-0 right-0 absolute`}>
          <div className='w-full absolute top-0 flex justify-end'>
            <button onClick={()=>setShowSideBar(false)} className='p-2 '><IoCloseOutline color='white' size={30} /></button>
          </div>
          {/* Logo */}
          <div className='flex w-full items-center justify-center'>
          <h1 className='text-white text-5xl inline-block font-bold'>J</h1>
          <h1 className='text-themeGreen text-5xl inline-block font-bold'>P</h1>
          </div>
          {/* Links */}
          <nav className='flex flex-col w-full  justify-center items-center gap-10 pe-5'>
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
        </aside>
    </header>
  )
}

export default Header