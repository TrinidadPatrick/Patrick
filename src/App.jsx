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
      {/* <div className="fixed inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" /> */}

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
