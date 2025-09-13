import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="site">
      <Navbar />
      <Outlet />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vishal. Built with Vite + React.</p>
      </footer>
    </div>
  )
}


