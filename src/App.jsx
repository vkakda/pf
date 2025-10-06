import React from 'react'
import { profile } from './data/profile'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import ScrollProgress from './pages/ScrollProgress'

function App() {
  return (
    <div className="site">
      <ScrollProgress />
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}

export default App
