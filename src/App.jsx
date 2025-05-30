import { useState } from 'react'
import { Link, Element } from 'react-scroll';
import './App.css'
import Introduction from './Components/Introduction'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe';

function App() {

  return (
    <div className='App relative overflow-x-hidden flex flex-col items-center w-full max-w-[1920px] mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 '>
      <Header />

      <main className='flex flex-col w-full'>
        <Element name='home'>
          <Introduction />
        </Element>
        <Element name='about'>
          <AboutMe />
        </Element>
        <Element name='services'>
          <Services />
        </Element>
        <Element name='skills'>
          <Skills />
        </Element>
        <Element name='projects'>
          <Projects />
        </Element>
        <Element name='contactme'>
          <ContactMe />
        </Element>
      </main>
    </div>
  )
}

export default App
