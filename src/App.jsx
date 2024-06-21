import { useState } from 'react'
import { Link, Element } from 'react-scroll';
import './App.css'
import Introduction from './Components/Introduction'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />

      <main>
        <Element name='home'>
          <Introduction />
        </Element>
        <Element name='about'>
          <AboutMe />
        </Element>
        <Element name='skills'>
          <Skills />
        </Element>
        <Element name='services'>
          <Services />
        </Element>
        <Element name='projects'>
          <Projects />
        </Element>
      </main>
    </div>
  )
}

export default App
