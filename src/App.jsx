import React from 'react'
import Navbar from './components/Navbar'
import Abhi from './components/Abhi'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skill'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Abhi/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App