import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [activeLink, setActiveLink] = useState('home')
  const [showSideBar, setShowSideBar] = useState(false)
  const sections = ['home', 'about', 'experience', 'services', 'skills', 'projects', 'contactme'];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg(true); // Apply background color
    } else {
        setNavbarBg(false); // Remove background color
    }
    const scrollPos = window.scrollY + window.innerHeight / 2; // middle of the viewport
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveLink(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  // Effect to add scroll event listener
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <header className={`fixed max-w-[1920px] z-50 flex items-center w-full ${navbarBg ? 'bg-transparent bg-opacity-80 backdrop-blur-lg' : ''} p-0`}>
      {/* Backdrop */}
      {
        showSideBar &&
        <div onClick={()=>setShowSideBar(false)} style={{backgroundColor : 'rgba(0,0,0,0.6)'}} className='absolute top-0 z-20 w-full h-screen bg-white cursor-pointer backdrop-blur-sm'>

      </div>
      }
      
      <div className='flex py-5 ps-5'>
        <h1 className='inline-block text-4xl font-bold text-white'>J</h1>
        <h1 className='inline-block text-4xl font-bold text-[#2fd1a9]'>P</h1>
      </div>

        {/* Desktop Links */}
        <nav className='justify-end hidden w-full h-full gap-10 md:flex pe-5'>
          <Link to="home" smooth={true} duration={500}>
                <button onClick={()=>handleSetActive('home')} className={`underline-transition ${activeLink === 'home' ? 'active underline-offset-4' : ' '} text-white `}>Home</button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <button onClick={()=>handleSetActive('about')} className={`underline-transition ${activeLink === 'about' ? 'active underline-offset-4' : ' '} text-white `}>About me</button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button onClick={()=>handleSetActive('projects')} className={`underline-transition ${activeLink === 'projects' ? 'active underline-offset-4' : ' '} text-white `}>Projects</button>
          </Link>
          <Link to="skills"  smooth={true} duration={500} offset={-100}>
            <button onClick={()=>handleSetActive('skills')} className={`underline-transition ${activeLink === 'skills' ? 'active underline-offset-4' : ' '} text-white `}>Skills</button>
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <button onClick={()=>handleSetActive('experience')} className={`underline-transition ${activeLink === 'experience' ? 'active underline-offset-4' : ' '} text-white `}>Experience</button>
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-100}>
            <button onClick={()=>handleSetActive('services')} className={`underline-transition ${activeLink === 'services' ? 'active underline-offset-4' : ' '} text-white `}>Services</button>
          </Link>
          {
            navbarBg && 
            <Link to="contactme" smooth={true} duration={500}>
            <button onClick={()=>handleSetActive('contactme')} className={`underline-transition ${activeLink === 'services' ? 'active underline-offset-4' : ' '} text-white `}>Contact</button>
            </Link>
          }
        </nav>

        {/* Hamburger Button */}
        <nav className='flex items-center justify-end w-full h-full mb-3 pe-5 md:hidden'>
          <button onClick={()=>setShowSideBar(true)}>
            <RxHamburgerMenu color='white' size={25} />
          </button>
        </nav>
        
        {/* Mobile sidebar */}
        <aside className={`${showSideBar ? 'translate-x-[0%]' : 'translate-x-[100%]'} md:hidden transition-all ease-in w-screen extraSm:w-[300px] z-30 bg-themeDark flex flex-col gap-20 justify-center items-center h-screen top-0 right-0 absolute`}>
          <div className='absolute top-0 flex justify-end w-full'>
            <button onClick={()=>setShowSideBar(false)} className='p-2 '><IoCloseOutline color='white' size={30} /></button>
          </div>
          {/* Logo */}
          <div className='flex items-center justify-center w-full'>
          <h1 className='inline-block text-5xl font-bold text-white'>J</h1>
          <h1 className='inline-block text-5xl font-bold text-[#2fd1a9]'>P</h1>
          </div>
          {/* Links */}
          <nav className='flex flex-col items-center justify-center w-full gap-10 pe-5'>
          <Link to="home" smooth={true} duration={500}>
                <button onClick={()=>{handleSetActive('home');setShowSideBar(false)}} className={`underline-transition ${activeLink === 'home' && ' active underline-offset-4'} text-white `}>Home</button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
          <button onClick={()=>{handleSetActive('about');setShowSideBar(false)}} className={`underline-transition ${activeLink === 'about' && ' active underline-offset-4'} text-white `}>About me</button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
          <button onClick={()=>{handleSetActive('projects');setShowSideBar(false)}} className={`underline-transition ${activeLink === 'projects' && ' active underline-offset-4'} text-white `}>Projects</button>
          </Link>
          <Link to="skills"  smooth={true} duration={500}>
          <button onClick={()=>{handleSetActive('skills');setShowSideBar(false)}} className={`underline-transition ${activeLink === 'skills' && ' active underline-offset-4'} text-white `}>Skills</button>
          </Link>
          <Link to="services" smooth={true} duration={500}>
          <button onClick={()=>{handleSetActive('services');setShowSideBar(false)}} className={`underline-transition ${activeLink === 'services' && ' active underline-offset-4'} text-white `}>Services</button>
          </Link>
          <Link to="contactme" smooth={true} duration={500}>
            <button onClick={()=>{handleSetActive('contactme');setShowSideBar(false)}} className={`underline-transition ${activeLink === 'contactme' && ' active underline-offset-4'} text-white `}>Contact</button>
          </Link>
          </nav>
        </aside>
    </header>
  )
}

export default Header