import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Navbar() {
  const [lastY, setLastY] = useState(0)
  const [hideHeader, setHideHeader] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHideHeader(y > lastY && y > 40)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <header className={`header ${hideHeader ? 'hide' : ''}`}>
      <a href="#home" className="brand brand-lg">{profile.name}</a>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </header>
  )
}


