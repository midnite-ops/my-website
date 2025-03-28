import { useState } from 'react'
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}

export default App
